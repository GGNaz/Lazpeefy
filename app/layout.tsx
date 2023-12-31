"use client";
import { SWRConfig } from "swr";
import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "animate.css";
import { Providers } from "@/redux/provider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  login,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SWRConfig value={{ provider: () => new Map() }}>
          <Providers> {children}</Providers>
        </SWRConfig>
      </body>
    </html>
  );
}
