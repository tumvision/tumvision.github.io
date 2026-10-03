"use client";

import React, { useEffect, useRef } from "react";
import { buildScene, Vec3 } from "@/app/components/reconstructionScene";

// Hero animation in the style of a multi-view reconstruction: camera frustums
// orbit the TUM clock tower, cast rays onto it, its sparse point cloud
// converges and the box model fades in. Rendered with a pinhole projection on a 2D canvas.

const CONVERGE_TIME = 3.5; // s until the point cloud has settled
const MESH_FADE_START = 2.5;
const MESH_FADE_END = 4.5;
const RAY_INTERVAL = 0.7; // s between new sets of camera rays

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));
const lerp = (a: Vec3, b: Vec3, t: number): Vec3 => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];

const CYAN = "29, 175, 255";
const WHITE = "246, 246, 246";
const GOLD = "232, 190, 90";

const PointCloud = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const scene = buildScene();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let rays: { camera: number; points: number[]; born: number }[] = [];
    let lastRay = -Infinity;
    const startTime = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const angle = 0.6 + time * 0.12;
      const cosY = Math.cos(angle);
      const sinY = Math.sin(angle);
      const tilt = 0.32;
      const cosX = Math.cos(tilt);
      const sinX = Math.sin(tilt);
      const s = Math.min(width, height) * 0.16;
      const cx = width * 0.55;
      const cy = height / 2;
      const D = 7;

      // returns screen x, y, perspective factor and nearness (0 far .. 1 near)
      const project = ([x, y, z]: Vec3) => {
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const f = D / (D + z2);
        return { x: cx + x1 * f * s, y: cy + y1 * f * s, f, near: clamp01((1.5 - z2) / 3) };
      };

      const line = (a: Vec3, b: Vec3, color: string, alpha: number, lineWidth = 1) => {
        const p = project(a);
        const q = project(b);
        ctx.strokeStyle = `rgba(${color}, ${alpha})`;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
      };

      // ground grid
      for (const [a, b] of scene.grid) line(a, b, WHITE, 0.05);

      // reconstructed mesh
      const meshAlpha = clamp01((time - MESH_FADE_START) / (MESH_FADE_END - MESH_FADE_START));
      if (meshAlpha > 0) {
        for (const [i, j] of scene.edges) {
          const a = scene.verts[i];
          const b = scene.verts[j];
          const near = (project(a).near + project(b).near) / 2;
          line(a, b, CYAN, meshAlpha * (0.05 + near * 0.3), 0.8);
        }
      }

      // sparse point cloud flying in
      const points = scene.points.map((pt) => {
        const t = easeOutCubic(clamp01((time / CONVERGE_TIME - pt.delay) / (1 - pt.delay)));
        return lerp(pt.start, pt.target, t);
      });
      points.forEach((pos, i) => {
        const p = project(pos);
        const size = 1.6 * p.f;
        ctx.fillStyle = `rgba(${scene.points[i].gold ? GOLD : WHITE}, ${0.15 + p.near * 0.7})`;
        ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size);
      });

      // rays from cameras to observed points
      for (const ray of rays) {
        const life = clamp01(1 - (time - ray.born) / (RAY_INTERVAL * 2));
        const center = scene.cameras[ray.camera].center;
        for (const idx of ray.points) {
          line(center, points[idx], CYAN, life * 0.35, 0.7);
          const p = project(points[idx]);
          ctx.fillStyle = `rgba(${CYAN}, ${life})`;
          ctx.fillRect(p.x - 1.5, p.y - 1.5, 3, 3);
        }
      }

      // camera frustums
      for (const { center, corners } of scene.cameras) {
        const alpha = 0.3 + project(center).near * 0.6;
        for (let k = 0; k < 4; k++) {
          line(center, corners[k], CYAN, alpha);
          line(corners[k], corners[(k + 1) % 4], CYAN, alpha);
        }
      }
    };

    const loop = (now: number) => {
      const time = (now - startTime) / 1000;
      if (time - lastRay > RAY_INTERVAL) {
        lastRay = time;
        rays = [
          ...rays.filter((r) => time - r.born < RAY_INTERVAL * 2),
          {
            camera: Math.floor(Math.random() * scene.cameras.length),
            points: Array.from({ length: 4 }, () =>
              Math.floor(Math.random() * scene.points.length)
            ),
            born: time,
          },
        ];
      }
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    // reduced motion: show the finished reconstruction, no animation
    const drawStatic = () => draw(MESH_FADE_END);

    resize();
    window.addEventListener("resize", resize);
    if (reduceMotion) {
      drawStatic();
      window.addEventListener("resize", drawStatic);
    } else {
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", drawStatic);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`h-full w-full ${className}`} />;
};

export default PointCloud;
