"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const pageLinks = [
  { name: "About Us", href: "/about" },
  { name: "Life Cycle", href: "/life-cycle" },
  { name: "Industries", href: "/industries" },
  { name: "Goals", href: "/goals" },
  { name: "Blog", href: "/blog" },
];

const hamburgerMenuSlideVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    duration: 1.5,
  },
};

const linkVariants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      ease: [0.33, 1, 0.68, 1],
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const linkContainerVariants = {
  initial: {
    transition: { staggerChildren: 0.09 },
  },
  animate: {
    transition: { staggerChildren: 0.09, delayChildren: 0.5 },
  },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const MotionLink = motion(Link);

  return (
    <header className="z-50 bg-brand-background shadow-sm sticky top-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex font-medium">
          <Link href="/" className="-m-1.5 p-1.5 flex gap-2 items-center">
            <span className="sm:text-lg">Hasper</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-8 font-secondary items-center">
          {pageLinks.map((details) => (
            <Link
              href={details.href}
              className="text-base leading-6 font-medium text-brand-accent data-[active-link=true]:text-brand-popup transition-colors duration-200"
              key={details.name}
              scroll
              data-active-link={pathname === details.href}
            >
              {details.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* mobile navbar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={hamburgerMenuSlideVariants}
            initial="initial"
            animate={mobileMenuOpen ? "animate" : "initial"}
            exit="exit"
            transition={{
              ease: [0.33, 1, 0.68, 1],
              duration: 0.75,
            }}
            className="fixed lg:hidden top-0 right-0 z-50 w-screen h-screen overflow-y-hidden bg-brand-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="text-center">
                <motion.div
                  variants={linkContainerVariants}
                  initial="initial"
                  animate={mobileMenuOpen ? "animate" : "initial"}
                  className="space-y-2 py-6 font-secondary mb-4"
                >
                  {pageLinks.map((details) => (
                    <MotionLink
                      variants={linkVariants}
                      href={details.href}
                      className="text-xl block rounded-lg px-3 py-2 leading-7  hover:bg-brandText/10"
                      key={details.name}
                      scroll
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {details.name}
                    </MotionLink>
                  ))}
                </motion.div>


              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}