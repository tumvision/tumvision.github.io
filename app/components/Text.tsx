import React from "react";

type TextProps = {
  children?: React.ReactNode;
  className?: string;
};

const Text = ({ children, className }: TextProps) => {
  return (
    <p className={`text-sm font-light text-logo_txt ${className}`}>
      {children}
    </p>
  );
};

export default Text;
