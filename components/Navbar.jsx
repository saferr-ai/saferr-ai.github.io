"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { href: "/research/", label: "Research" },
    { href: "/news/", label: "News" },
    { href: "/talks/", label: "Talks" },
    { href: "/about/", label: "About" },
    { href: "/contact/", label: "Contact" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false); // Close menu on item click
    };

    return (
        <nav className="bg-background text-foreground sticky top-0 z-50">
            <div className="absolute w-full bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="text-2xl font-bold">
                            <Link href="/" className="hover:text-foreground">
                                SafeRR AI Lab
                            </Link>
                        </div>

                        {/* Links (Desktop) */}
                        <div className="hidden md:flex space-x-8 text-lg font-medium">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="hover:text-foreground relative group"
                                >
                                    <span className="underline-animation">{link.label}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={handleMenuToggle}
                                className="text-foreground hover:text-foreground focus:outline-none"
                                aria-label="Toggle Menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute  top-16 left-0 w-full bg-background shadow-lg"
                    >
                        <div className="space-y-4 px-4 pb-4 mx-auto">
                            {links.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{
                                        delay: index * 0.05,
                                        duration: 0.2,
                                    }}
                                    className="transform transition-transform duration-300 ease-in-out"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="block text-lg font-medium text-foreground hover:text-primary py-2"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export { Navbar };

// export default Navbar;
