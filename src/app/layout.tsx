import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "./App";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aurel — Premium E-Commerce",
  description: "Discover premium products curated for the modern lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}