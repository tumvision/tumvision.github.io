"""Single-view reconstruction of the TUM Thierschturm for the home page hero.

The tower is a square box seen corner-on at ~45 degrees, so every pixel on it
can be lifted to 3D by intersecting its viewing ray with the box face it lies
on (single-view metrology with a Manhattan / box prior). We detect corner
features like an SfM front end would, back-project them onto the faces of a
stack of boxes (cornices stick out, the upper body is set back) and complete
the hidden back half by the tower's 180 degree symmetry.

Source photo: "Turm der TU München.jpg" by D. Fuchsberger, CC BY-SA 4.0,
https://commons.wikimedia.org/wiki/File:Turm_der_TU_M%C3%BCnchen.jpg
(1920 px wide version, saved as scripts/thierschturm.jpg).

Usage: python scripts/tower_pointcloud.py scripts/thierschturm.jpg app/data/thierschTower.json
Needs opencv-python-headless and numpy.
"""

import json
import math
import sys

import cv2
import numpy as np

# measured on the 1920x2431 photo
CORNER_X = 920  # image column of the near vertical edge
# (top y, bottom y, image half width) of each stacked box, top to bottom
SECTIONS = [
    (320, 470, 775),  # top storey with corner blocks and railing (below the antenna wire)
    (470, 520, 845),  # upper cornice
    (520, 890, 780),  # upper body (set back)
    (890, 960, 895),  # middle cornice
    (960, 1850, 845),  # lower body with the clocks
    (1850, 2100, 1000),  # stone parapet
]
TOP_Y, BOTTOM_Y = SECTIONS[0][0], SECTIONS[-1][1]
UNITS = 2.7  # world height of the model, matches the hero scene scale

# the foreground roof in the lower left covers the tower below this line
ROOF = ((170, 1600), (1360, 2400))

MAX_FEATURES = 1700


def section_at(y):
    for top, bottom, half in SECTIONS:
        if top <= y < bottom:
            return half
    return None


def below_roof(x, y):
    (x0, y0), (x1, y1) = ROOF
    return y > y0 + (x - x0) * (y1 - y0) / (x1 - x0)


def main(src, dst):
    img = cv2.imread(src)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    h_img, w_img = gray.shape

    mask = np.zeros_like(gray)
    for y in range(TOP_Y, min(BOTTOM_Y, h_img)):
        half = section_at(y)
        x0, x1 = max(0, CORNER_X - half), min(w_img, CORNER_X + half)
        mask[y, x0:x1] = 255
    ys, xs = np.nonzero(mask)
    mask[ys[below_roof(xs, ys)], xs[below_roof(xs, ys)]] = 0

    feats = cv2.goodFeaturesToTrack(
        gray, MAX_FEATURES, qualityLevel=0.01, minDistance=7, mask=mask
    ).reshape(-1, 2)

    px_per_unit = (BOTTOM_Y - TOP_Y) / UNITS
    mid_y = (TOP_Y + BOTTOM_Y) / 2
    rng = np.random.default_rng(0)
    points = []
    for x, y in feats.tolist():
        half = section_at(int(y))
        h = half / math.sqrt(2)  # box half size in pixels
        u = (x - CORNER_X) * math.sqrt(2)  # distance along the face from the corner
        wy = (y - mid_y) / px_per_unit
        if u < 0:  # left face, z = +h
            p = (h + u, h)
        else:  # right face, x = +h
            p = (h, h - u)
        # small depth jitter so the faces read as triangulated, not flat
        jitter = float(rng.normal(0, 4))
        p = (p[0] + jitter * (u >= 0), p[1] + jitter * (u < 0))
        b, g, r = img[int(y), int(x)]
        color = int(r) << 16 | int(g) << 8 | int(b)
        for sx, sz in ((p[0], p[1]), (-p[0], -p[1])):  # 180 degree symmetry
            points.append([round(sx / px_per_unit, 3), round(wy, 3), round(sz / px_per_unit, 3), color])

    # wireframe of the box stack for the "mesh" stage
    boxes = [
        [round((t - mid_y) / px_per_unit, 3), round((b - mid_y) / px_per_unit, 3),
         round(half / math.sqrt(2) / px_per_unit, 3)]
        for t, b, half in SECTIONS
    ]

    with open(dst, "w") as f:
        json.dump({"points": points, "boxes": boxes}, f, separators=(",", ":"))
    print(f"{len(feats)} features -> {len(points)} points, written to {dst}")


if __name__ == "__main__":
    main(*sys.argv[1:3])
