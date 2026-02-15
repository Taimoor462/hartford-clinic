'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'HOME', href: '/' },
        // { name: 'ABOUT US', href: '/about' },
        { name: 'SERVICES', href: '/services' },
        { name: 'FORMS', href: '/forms' },
        { name: 'FEEDBACK', href: '/feedback' },
        // { name: 'COVID-19', href: '/covid-19' },
        // { name: 'FLU VACCINE', href: '/flu-vaccine' },
        // { name: 'WEIGHT LOSS PROGRAM', href: '/weight-loss' },
    ];

    return (
        <header className="bg-blue border-b border-white/20">
            <div className="custom-container flex items-center justify-between h-22">
                <div className='flex items-center gap-4 sm:gap-6'>
                {/* Logo */}
                <Link href="/" className="flex items-center shrink-0">
                    <Image src="/images/svgs/logo.svg" width={60} height={60} alt="Logo" />
                </Link>
                <h3 className='text-white font-semibold text-lg md:text-xl'>Family Care of Hartford</h3>

                </div>
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-3 py-2 text-base font-semibold text-white hover:text-blue-100 hover:bg-white/10 rounded transition-all duration-200"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>


                {/* Phone & Contact Button */}
                <Link
                    href="#"
                    className="hidden lg:flex justify-center items-center w-42.5 text-white uppercase border-2 border-white h-13 rounded-md hover:bg-white hover:text-dark-blue2 transition-all duration-300 transform "
                >
                    Contact
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 focus:outline-none cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden pb-4 border-t border-white/20 mt-2 bg-white">
                    <nav className="flex flex-col space-y-2 pt-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-sm font-semibold text-dark-blue2 hover:bg-dark-blue2/10 rounded transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="#"
                            className="mx-4 mt-2 px-6 py-3 bg-white text-dark-blue2 font-bold rounded text-center border-2 border-dark-blue2 hover:bg-blue-50 transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            CONTACT
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
