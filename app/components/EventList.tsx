"use client";

import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import EventCard from "@/app/components/EventCard";
import Headline from "@/app/components/Headline";
import Text from "@/app/components/Text";
import { ClubEvent, semesterOf, splitEvents, todayInMunich } from "@/app/data/events";

type EventListProps = {
  // date of the static build; replaced with the visitor's date after mount
  buildDate: string;
};

const EventList = ({ buildDate }: EventListProps) => {
  const [today, setToday] = useState(buildDate);

  useEffect(() => {
    setToday(todayInMunich());
  }, []);

  const { upcoming, previous } = splitEvents(today);

  // group previous events by semester, each led by its kickoff keynote
  const semesters: { key: string; label: string; events: ClubEvent[] }[] = [];
  for (const event of previous) {
    const { key, label } = semesterOf(event.date);
    if (semesters[semesters.length - 1]?.key !== key) {
      semesters.push({ key, label, events: [] });
    }
    semesters[semesters.length - 1].events.push(event);
  }
  for (const semester of semesters) {
    semester.events.sort((a, b) => Number(b.type === "kickoff") - Number(a.type === "kickoff"));
  }

  return (
    <React.Fragment>
      <Headline size="sm" className="mt-10">
        Upcoming Events
      </Headline>
      {upcoming.length > 0 ? (
        <div className="mt-4 flex flex-col gap-3">
          {upcoming.map((event, i) => (
            <EventCard key={event.date + event.speaker} event={event} highlight={i === 0} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed border-line p-5">
          <Text>
            No talks scheduled right now - the next series is in the works. Follow us on{" "}
            <a
              href="https://www.linkedin.com/company/tumvision"
              className="text-logo_main hover:underline"
            >
              LinkedIn
            </a>{" "}
            to hear about it first.
          </Text>
        </div>
      )}

      <Headline size="sm" className="mt-12">
        Previous Events
        <span className="ml-3 font-mono text-sm font-normal text-muted">
          {previous.length} talks
        </span>
      </Headline>
      {/* latest semester open, older ones collapsed so the page stays short */}
      {semesters.map(({ key, label, events }, i) => (
        <details key={key} open={i === 0} className="group mt-6">
          <summary className="flex cursor-pointer list-none items-center gap-3 font-mono text-sm text-logo_main [&::-webkit-details-marker]:hidden">
            <FiChevronRight className="transition group-open:rotate-90" />
            {label}
            <span className="text-muted">· {events.length} talks</span>
            <span className="h-px flex-1 bg-line" />
          </summary>
          <div className="mt-3 flex flex-col gap-3">
            {events.map((event) => (
              <EventCard key={event.date + event.speaker} event={event} />
            ))}
          </div>
        </details>
      ))}
    </React.Fragment>
  );
};

export default EventList;
