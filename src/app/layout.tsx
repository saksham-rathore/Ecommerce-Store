import type { Metadata } from "next";
import Navbar from "@/app/Components/Navbar";
import "./globals.css";
import Products from "./Components/Products";
import Scales from "./Components/Scales"

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
        <Products />
        {children}
        <Scales />
      </body>
    </html>
  );
}
