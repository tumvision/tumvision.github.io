// Scene for the home page hero: a sparse point cloud of the TUM Thierschturm
// (single-view reconstruction, see scripts/tower_pointcloud.py), the
// wireframe of its box model, and a ring of camera frustums looking at it.

import tower from "@/app/data/thierschTower.json";

export type Vec3 = [number, number, number];

const add = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const scale = (a: Vec3, s: number): Vec3 => [a[0] * s, a[1] * s, a[2] * s];
const cross = (a: Vec3, b: Vec3): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
const normalize = (a: Vec3): Vec3 => scale(a, 1 / Math.hypot(a[0], a[1], a[2]));

export type Frustum = { center: Vec3; corners: Vec3[] };

export type Scene = {
  verts: Vec3[];
  edges: [number, number][];
  points: { target: Vec3; start: Vec3; delay: number; gold: boolean }[];
  cameras: Frustum[];
  grid: [Vec3, Vec3][];
};

export const GROUND_Y = 1.35;

// the gilded clock faces are kept as an accent color
const isGold = (rgb: number) => {
  const r = (rgb >> 16) & 255;
  const g = (rgb >> 8) & 255;
  const b = rgb & 255;
  return r > 120 && r > b * 1.6 && g > b * 1.2;
};

export const buildScene = (): Scene => {
  // each box is [top y, bottom y, half size]; corners go 4 on top, 4 below
  const verts: Vec3[] = [];
  const edges: [number, number][] = [];
  for (const [top, bottom, h] of tower.boxes) {
    const base = verts.length;
    for (const y of [top, bottom]) {
      verts.push([h, y, h], [-h, y, h], [-h, y, -h], [h, y, -h]);
    }
    for (let k = 0; k < 4; k++) {
      const next = (k + 1) % 4;
      edges.push([base + k, base + next], [base + 4 + k, base + 4 + next], [base + k, base + 4 + k]);
    }
  }

  // sparse point cloud, each point flying in from a random position
  const points = tower.points.map(([x, y, z, rgb]) => {
    const dir = normalize([Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]);
    return {
      target: [x, y, z] as Vec3,
      start: scale(dir, 2 + Math.random() * 2.5),
      delay: Math.random() * 0.5,
      gold: isGold(rgb),
    };
  });

  // camera frustums on a slightly wavy ring, all looking at the object
  const cameras: Frustum[] = Array.from({ length: 8 }, (_, i) => {
    const phi = (i / 8) * Math.PI * 2;
    const center: Vec3 = [2.5 * Math.cos(phi), -0.5 + 0.35 * Math.sin(3 * phi), 2.5 * Math.sin(phi)];
    const forward = normalize(scale(center, -1));
    const right = normalize(cross(forward, [0, -1, 0]));
    const up = cross(right, forward);
    const base = add(center, scale(forward, 0.32));
    const corners = [
      [1, 1], [-1, 1], [-1, -1], [1, -1],
    ].map(([sx, sy]) => add(base, add(scale(right, 0.2 * sx), scale(up, 0.14 * sy))));
    return { center, corners };
  });

  const grid: [Vec3, Vec3][] = [];
  for (let k = -3; k <= 3; k += 0.5) {
    grid.push([[k, GROUND_Y, -3], [k, GROUND_Y, 3]]);
    grid.push([[-3, GROUND_Y, k], [3, GROUND_Y, k]]);
  }

  return { verts, edges, points, cameras, grid };
};
