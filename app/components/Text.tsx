import React from "react";

type TextProps = {
  children?: React.ReactNode;
  className?: string;
};

const Text = ({ children, className = "" }: TextProps) => {
  return (
    <p className={`text-base font-normal leading-relaxed text-muted ${className}`}>
      {children}
    </p>
  );
};

export default Text;
