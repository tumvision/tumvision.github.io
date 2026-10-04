import React from "react";

type HeadlineProps = {
  children?: React.ReactNode;
  className?: string;
  size?: "lg" | "sm";
  // optional section number shown in front, e.g. "01"
  label?: string;
};

const Headline = ({ children, className = "", size = "lg", label }: HeadlineProps) => {
  if (size === "sm") {
    return (
      <h2 className={`text-xl font-bold text-logo_txt sm:text-2xl ${className}`}>
        {children}
      </h2>
    );
  }

  return (
    <h1 className={`text-4xl font-extrabold tracking-tight text-logo_txt sm:text-5xl ${className}`}>
      {label && (
        <span className="mb-2 block font-mono text-sm font-normal tracking-normal text-logo_main">
          [{label}]
        </span>
      )}
      {children}
    </h1>
  );
};

export default Headline;
