import React from "react";
import Footer from "@/app/components/Footer";

type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <main className="flex flex-col justify-between pt-28 min-h-screen w-8/12 md:max-w-[700px] mx-auto">
      <div>{children}</div>
      <Footer mode="dynamic" />
    </main>
  );
};

export default Container;
