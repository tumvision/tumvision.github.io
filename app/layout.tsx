import { Metadata } from "next";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

import { Nunito } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

// default font
const roboto = Nunito({
  weight: "700",
  subsets: ["latin"],
});

// metadata
export const metadata: Metadata = {
  title: "TUMVision",
  description: "3D Computer Vision Club",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${roboto.className} bg-logo_bg`}>
        <Navbar />
        <main className="flex flex-col justify-between min-h-screen  max-w-[700px] mx-auto">
          {children}
          <Footer mode="dynamic" />
        </main>
      </body>
    </html>
  );
}
