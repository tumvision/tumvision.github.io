import { Metadata } from "next";
import "./globals.css";

import { Nunito } from "next/font/google";

const roboto = Nunito({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TUMVision",
  description: "3D Computer Vision Club",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${roboto.className}`}>{children}</body>
    </html>
  );
}
