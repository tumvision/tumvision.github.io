"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { splitEvents, todayInMunich } from "@/app/data/events";

// Teaser for the home page: next upcoming talk, or the latest one if none is planned.
const NextEvent = ({ buildDate }: { buildDate: string }) => {
  const [today, setToday] = useState(buildDate);

  useEffect(() => {
    setToday(todayInMunich());
  }, []);

  const { upcoming, previous } = splitEvents(today);
  const event = upcoming[0] ?? previous[0];
  if (!event) return null;

  const [year, month, day] = event.date.split("-");
  const kind = event.type === "kickoff" ? "keynote" : "talk";

  return (
    <Link
      href="/meetups"
      className="group block max-w-md rounded-xl border border-line bg-surface/70 p-4 backdrop-blur transition hover:border-logo_main/50 hover:shadow-glow"
    >
      <span className="font-mono text-xs text-logo_main">
        {upcoming[0] ? `> next ${kind}` : `> latest ${kind}`} · {day}.{month}.{year} · {event.time}
      </span>
      <p className="mt-1 line-clamp-2 text-base leading-snug text-logo_txt">{event.title}</p>
      <p className="mt-1 flex items-center justify-between text-sm font-normal text-muted">
        {event.speaker}
        <FiArrowRight className="text-logo_main transition group-hover:translate-x-1" />
      </p>
    </Link>
  );
};

export default NextEvent;
