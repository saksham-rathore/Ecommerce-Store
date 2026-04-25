import type { Metadata } from "next";
import Navbar from "@/app/Components/Navbar";
import "./globals.css";
import Products from "./Components/Products";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto ">
        <Navbar />
        <Products />
        {children}
      </body>
    </html>
  );
}
