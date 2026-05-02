import type { Metadata } from "next";
import "./globals.css";
import App from "./App";

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