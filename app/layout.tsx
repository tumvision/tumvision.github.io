import { Metadata } from "next";

import Navbar from "@/app/components/Navbar";

import { Nunito, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// default font
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

// accent font for labels, dates and the navbar
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// metadata
export const metadata: Metadata = {
  title: "TUMVision",
  description:
    "3D Computer Vision Club at the Technical University of Munich - talks, paper reading groups and meetups in Garching.",
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
    <html lang="en" className={`${nunito.variable} ${mono.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
