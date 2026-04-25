import type { Metadata } from "next";
import Navbar from "@/app/Components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
