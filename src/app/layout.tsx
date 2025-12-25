import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subodh Singh",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Navbar />

        <div
          className="fixed top-0 left-0 pointer-events-none z-0 w-full h-dvh"
          style={{
            backgroundImage: 'linear-gradient(to bottom right, rgba(0, 0, 255, 0) 75%, rgba(0, 0, 255, .25) 100%)'
          }}
        ></div>

        <div
          className="w-full z-10 min-h-dvh hide-scrollbar flex justify-center"
        >
          {children}
        </div>

      </body>
    </html>
  );
}
