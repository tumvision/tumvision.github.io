import React from "react";

type InfoStackProps = {
  position: "right" | "left";
  children?: React.ReactNode;
};

const InfoStack = ({ position, children }: InfoStackProps) => {
  return (
    <div
      className={`fixed bottom-0 ${
        position === "right" ? "right-8" : "left-8"
      } flex items-center gap-6`}
      style={{ writingMode: "vertical-rl" }}
    >
      {children}
      <div className="h-24 w-px bg-logo_txt"></div>
    </div>
  );
};

type InfoStackItemProps = {
  type: "icon" | "text";
  content?: React.ReactNode;
  link?: string;
};

export const InfoStackItem = ({ type, link, content }: InfoStackItemProps) => {
  return (
    <div
      className={`${
        type === "text" ? "font-mono text-xs font-light antialiased" : "text-xl"
      } cursor-pointer text-logo_txt  transition hover:-translate-y-1 hover:text-logo_main`}
    >
      <a href={link}>{content}</a>
    </div>
  );
};

export default InfoStack;
