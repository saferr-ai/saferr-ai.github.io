"use client";
import Link from "next/link";
import { useState } from "react";

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
        <nav className="bg-background text-foreground">
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

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-4 mt-4">
                            {links.map((link, index) => (
                                <div
                                    key={link.href}
                                    className="transition-transform duration-300 ease-in-out transform"
                                    style={{
                                        transitionDelay: `${index * 50}ms`,
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="block text-lg font-medium text-foreground hover:text-primary py-2"
                                    >
                                        {link.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export { Navbar };

// export default Navbar;
