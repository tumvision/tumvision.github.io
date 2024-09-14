import React from "react";

type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="pt-28">{children}</div>;
};

export default Container;
