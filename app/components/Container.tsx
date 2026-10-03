import React from "react";
import Footer from "@/app/components/Footer";

type ContainerProps = {
  children?: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-20 pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;
