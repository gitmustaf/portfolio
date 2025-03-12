import React from "react"; 
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Mustaf - Portfolio",
  description: "Senior Full-Stack Developer | MERN & AWS Expert",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">{children}</body>
    </html>
  );
}
