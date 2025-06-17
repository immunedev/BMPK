'use client'

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo: React.FC = () => (
    <div className="flex items-center justify-center">
        <span className="text-lg md:text-xl font-bold text-rose-800 tracking-wide">
            BMPK - Kancelaria Prawna
        </span>
    </div>
);

const navLinks = [
    { href: "/", label: "Strona główna" },
    { href: "/oferta-frank", label: "Oferta dla Frankowiczów" },
    { href: "/oferta-wibor", label: "Oferta dla WIBORowców" },
];

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-30 w-full bg-white/90 h-20 backdrop-blur shadow-md flex items-center py-3 px-2 md:px-0 border-b border-rose-100">
            <div className="container mx-auto flex justify-between items-center">
                <Logo />
                {/* Hamburger Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-rose-800 hover:text-rose-900 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 md:space-x-10">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`font-semibold transition ${
                                pathname === href
                                    ? "text-rose-500"
                                    : "text-rose-800 hover:text-rose-900"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`font-semibold transition ${
                                    pathname === href
                                        ? "text-rose-500"
                                        : "text-rose-800 hover:text-rose-900"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;