import React from "react";
import { FiClock, FiMapPin, FiUser, FiArrowUpRight, FiStar, FiLinkedin } from "react-icons/fi";
import { ADDRESS, ClubEvent, EVENT_LABELS, isFeatured } from "@/app/data/events";

type EventCardProps = {
  event: ClubEvent;
  highlight?: boolean;
  className?: string;
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const EventCard = ({ event, highlight = false, className = "" }: EventCardProps) => {
  const [year, month, day] = event.date.split("-");
  const featured = isFeatured(event);

  return (
    <article
      className={`group flex gap-4 rounded-xl border p-4 transition sm:gap-6 sm:p-5 ${
        featured
          ? "border-logo_main/60 bg-gradient-to-br from-logo_main/10 to-surface shadow-glow sm:p-6"
          : highlight
            ? "border-logo_main/40 bg-surface shadow-glow"
            : "border-line bg-surface/60 hover:border-logo_main/40 hover:bg-surface"
      } ${className}`}
    >
      <div className="flex w-14 shrink-0 flex-col items-center justify-center rounded-lg border border-line bg-logo_bg py-2 font-mono sm:w-16">
        <span className="text-2xl leading-none text-logo_txt">{day}</span>
        <span className="mt-1 text-xs uppercase text-logo_main">
          {MONTHS[Number(month) - 1]}
        </span>
        <span className="text-[10px] text-muted">{year}</span>
      </div>

      <div className="min-w-0 flex-1">
        {featured ? (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-logo_main/50 bg-logo_main/10 px-2.5 py-0.5 font-mono text-xs uppercase tracking-wide text-logo_main">
            <FiStar className="fill-current" /> {EVENT_LABELS[event.type]}
          </span>
        ) : (
          <span className="font-mono text-xs text-logo_main">
            &gt; {EVENT_LABELS[event.type]}
          </span>
        )}
        <h3
          className={`leading-snug text-logo_txt ${
            featured ? "mt-2 text-lg font-bold sm:text-2xl" : "mt-1 text-base sm:text-lg"
          }`}
        >
          {event.paper ? (
            <a
              href={event.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-logo_main"
            >
              {event.title}
              <FiArrowUpRight className="ml-1 inline-block align-text-top text-muted transition group-hover:text-logo_main" />
            </a>
          ) : (
            event.title
          )}
        </h3>
        <div className="mt-2 flex flex-col gap-1 text-sm font-normal text-muted sm:flex-row sm:flex-wrap sm:gap-x-5">
          <span className="flex items-center gap-1.5">
            <FiUser className="shrink-0" />
            <span className={featured ? "text-logo_txt" : ""}>{event.speaker}</span>
            {event.affiliation && <span>· {event.affiliation}</span>}
          </span>
          <span className="flex items-center gap-1.5">
            <FiClock className="shrink-0" /> {event.time}
          </span>
          <span className="flex items-center gap-1.5">
            <FiMapPin className="shrink-0" />
            <span>
              {ADDRESS}, room&nbsp;
              <a
                href={event.room.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line underline-offset-2 hover:text-logo_main"
              >
                {event.room.name}
              </a>
            </span>
          </span>
          {event.post && (
            <a
              href={event.post}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-logo_main"
            >
              <FiLinkedin className="shrink-0" /> LinkedIn post
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default EventCard;
