import React from "react";

type HeadlineProps = {
  children?: React.ReactNode;
  className?: string;
};

const Headline = ({ children, className }: HeadlineProps) => {
  return (
    <h1 className={`text-4xl font-bold text-logo_txt ${className}`}>
      {children}
    </h1>
  );
};

export default Headline;
