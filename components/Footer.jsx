"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export function Footer() {
  return (
    <footer className="bg-[#111b21] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Logo and Download Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <Image src="/saferr-logo.png" alt="logo" width={200} height={200} />
            {/* <span className="text-2xl font-bold">SafeRR AI Lab</span> */}
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-semibold mb-4">What we do</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-white transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-300 hover:text-white transition"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsors"
                  className="text-gray-300 hover:text-white transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition"
                >
                  People
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Who we are</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-white transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/brand"
                  className="text-gray-300 hover:text-white transition"
                >
                  Brand Center
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">University of Central Florida</li>
              <li className="text-gray-300">contact@saferr.ai</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Collaborate</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition"
                >
                Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-300 hover:text-white transition"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-gray-300 hover:text-white transition"
                >
                  Security Advisories
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">2025 © SafeRR AI Lab</span>
            <Link
              href="/terms"
              className="text-sm text-gray-300 hover:text-white"
            >
              Terms & Privacy Policy
            </Link>
            <Link
              href="/sitemap"
              className="text-sm text-gray-300 hover:text-white"
            >
              Sitemap
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="https://twitter.com"
              className="text-gray-300 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link
              href="https://youtube.com"
              className="text-gray-300 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>         
          </div>
        </div>
      </div>
    </footer>
  );
}