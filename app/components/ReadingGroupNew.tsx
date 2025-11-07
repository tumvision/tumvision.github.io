import React from "react";

type ReadingGroupNewProps = {
  speaker: string;
  time: string;
  title: string;
  paper: string;
  className?: string;
};

const ReadingGroupNew = ({
  speaker,
  title,
  time,
  paper,
  className,
}: ReadingGroupNewProps) => {
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
            href="https://nav.tum.de/room/5610.01.011"
            className="hover:text-logo_main underline cursor-pointer"
          >
            01.10.11
          </a>
        </span>
      </p>
    </div>
  );
};

export default ReadingGroupNew;
