import Link from 'next/link';
import { Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-blue text-white py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="bg-white rounded-full p-2 shrink-0">
                            <Image src="/images/svgs/logo.svg" width={32} height={32} alt="Logo" />
                        </div>
                        <span className="text-xl font-bold tracking-wide">Family Care of Hartford</span>
                    </div>

                    {/* Contact Info - Compact */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-blue-50">
                        <div className="flex items-center gap-2">
                            <Image src="/images/svgs/pin.svg" width={16} height={16} className="brightness-0 invert opacity-80" alt="location" />
                            <span>556 Zion Street, Hartford, CT 06106</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-80">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 5.25V4.5z" clipRule="evenodd" />
                            </svg>
                            <span>860-947-4400</span>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors transform hover:scale-110">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors transform hover:scale-110">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors transform hover:scale-110">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/20 mt-8 pt-6 text-center">
                    <p className="text-blue-100 text-xs">
                        © {new Date().getFullYear()} Family Care of Hartford. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
