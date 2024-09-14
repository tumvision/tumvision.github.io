import React from "react";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-auto text-center">
        <h1 className="text-7xl font-bold">
          <span className="text-logo_txt">TUM</span>
          <span className="text-logo_main">Vision</span>
        </h1>
        <h2 className="text-3xl text-logo_txt">3D Computer Vision Club</h2>
      </div>
      <Footer mode="fixed" />
    </div>
  );
}
