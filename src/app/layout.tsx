import type { Metadata } from "next";
import "./globals.css";
import App from "./App";

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
      <body>
        <App />
      </body>
    </html>
  );
}