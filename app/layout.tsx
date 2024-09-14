import { Metadata } from "next";

import Navbar from "@/app/components/Navbar";

import { Nunito } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
