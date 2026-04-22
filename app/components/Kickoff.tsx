import React from "react";

type KickoffProps = {
  speaker: string;
  time: string;
  title: string;
  className?: string;
};

const Kickoff = ({
  speaker,
  title,
  time,
  className,
}: KickoffProps) => {
  return (
    <div className={`text-sm font-light text-logo_txt ${className}`}>
      <p className="text-lg">
        <span className="text-logo_main">&gt; </span>Kickoff session
      </p>
      <p>
        <span className="">Speaker: </span>
        <span>{speaker}</span>
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
            href="https://nav.tum.de/room/5613.02.010"
            className="hover:text-logo_main underline cursor-pointer"
          >
            02.13.010
          </a>
        </span>
      </p>
    </div>
  );
};

export default Kickoff;
