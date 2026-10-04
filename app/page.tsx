import React from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import PointCloud from "@/app/components/PointCloud";
import NextEvent from "@/app/components/NextEvent";
import EventStats from "@/app/components/EventStats";
import { todayInMunich } from "@/app/data/events";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="relative flex flex-1 items-center overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-40 md:w-3/5 md:opacity-100">
          <PointCloud />
        </div>
        <p className="absolute bottom-3 right-6 font-mono text-[10px] text-muted opacity-70">
          Thierschturm reconstructed from a{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Turm_der_TU_M%C3%BCnchen.jpg"
            className="underline hover:text-logo_main"
          >
            photo by D. Fuchsberger
          </a>
          ,{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            className="underline hover:text-logo_main"
          >
            CC BY-SA 4.0
          </a>
        </p>

        <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-32">
          <p className="font-mono text-sm text-logo_main">
            {"// Technical University of Munich"}
          </p>
          <h1 className="mt-3 text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
            <span className="text-logo_txt">TUM</span>
            <span className="text-logo_main">Vision</span>
          </h1>
          <h2 className="mt-3 text-2xl text-logo_txt sm:text-3xl">3D Computer Vision Student Club</h2>
          <p className="mt-5 max-w-md text-base font-normal leading-relaxed text-muted">
            Talks, paper reading groups and socials for students, researchers and
            industry in Munich who love reconstructing, generating and understanding
            the 3D world.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/meetups"
              className="rounded-lg bg-logo_main px-5 py-2.5 text-logo_bg transition hover:bg-logo_txt"
            >
              See upcoming talks
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-line px-5 py-2.5 text-logo_txt transition hover:border-logo_main hover:text-logo_main"
            >
              About us
            </Link>
          </div>

          <div className="mt-10">
            <NextEvent buildDate={todayInMunich()} />
          </div>

          <EventStats buildDate={todayInMunich()} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
