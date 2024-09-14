import React from "react";

type ReadingGroupProps = {
  speaker: string;
  time: string;
  title: string;
  paper: string;
  className?: string;
};

const ReadingGroup = ({
  speaker,
  title,
  time,
  paper,
  className,
}: ReadingGroupProps) => {
  return (
    <div className={`text-sm font-light text-logo_txt ${className}`}>
      <p className="text-lg">
        <span className="text-logo_main">&gt; </span>Paper Reading Group
      </p>
      <p>
        <span className="">Speaker: </span>
        <span>{speaker}</span>
      </p>
      <p>
        <span className="">Title: </span>
        <a href={paper} className="hover:text-logo_main  cursor-pointer">
          {title}
        </a>
      </p>
      <p>
        <span className="">Time: </span>
        <span>{time}</span>
      </p>
      <p className="text-sm font-light text-logo_txt">
        <span className="">Location: </span>
        <span>
          Boltzmannstraße 3, 85748 Garching, room&nbsp;
          <a
            href="https://nav.tum.de/room/5613.02.010#18/48.262803/11.666871"
            className="hover:text-logo_main underline cursor-pointer"
          >
            02.13.010
          </a>
        </span>
      </p>
    </div>
  );
};

export default ReadingGroup;
