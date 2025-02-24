import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import Link from "next/link";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SafeRR AI Lab ",
  description: "SafeRR AI Lab is a  UCF research lab working on Alignment AI of Generative AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background `}
      >
        <Navbar />
        <main className=" rounded-b-3xl lg:rounded-b-[4rem] overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
