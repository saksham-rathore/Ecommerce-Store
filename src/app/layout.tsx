import type { Metadata } from "next";
import Navbar from "@/app/Components/Navbar";
import "./globals.css";
import Scales from "./Components/Scales";

export const metadata: Metadata = {
  title: "AUREL – Premium E-Commerce",
  description: "Shop the finest products at AUREL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Scales />
        <Navbar />
        {children}
        <Scales />
      </body>
    </html>
  );
}