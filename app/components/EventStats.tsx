"use client";

import React, { useEffect, useState } from "react";
import { splitEvents, todayInMunich } from "@/app/data/events";

// Home page stats: only counts talks that already took place.
const EventStats = ({ buildDate }: { buildDate: string }) => {
  const [today, setToday] = useState(buildDate);

  useEffect(() => {
    setToday(todayInMunich());
  }, []);

  const { previous } = splitEvents(today);
  const speakers = new Set(previous.map((e) => e.speaker)).size;

  return (
    <React.Fragment>
      <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-mono">
        <div>
          <dt className="text-xs text-muted">talks hosted</dt>
          <dd className="text-2xl text-logo_txt">{previous.length}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">speakers</dt>
          <dd className="text-2xl text-logo_txt">{speakers}</dd>
        </div>
      </dl>
      <p className="mt-4 font-mono text-sm text-logo_main">
        Open to All · No Registration Required
      </p>
    </React.Fragment>
  );
};

export default EventStats;
