import Link from 'next/link';
import { Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-linear-to-br bg-blue text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Link href="/" className="flex items-center shrink-0">
                                <Image src="/images/svgs/logo.svg" width={40} height={40} alt="Logo" />
                            </Link>
                            <div>
                                <h3 className="text-lg font-bold">Family Care of Hartford</h3>
                                <p className="text-xs text-white">Healthcare Excellence</p>
                            </div>
                        </div>
                        <p className="text-white text-sm leading-relaxed">
                            Providing exceptional healthcare services with compassion and expertise. Your health is our priority.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-dark-blue">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-white hover:text-dark-blue transition-colors duration-200 text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-white hover:text-dark-blue transition-colors duration-200 text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/forms" className="text-white hover:text-dark-blue transition-colors duration-200 text-sm">
                                    Forms
                                </Link>
                            </li>
                            <li>
                                <Link href="/feedback" className="text-white hover:text-dark-blue transition-colors duration-200 text-sm">
                                    Feedback
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-dark-blue">Our Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/covid-19" className="text-white hover:text-dark-blue transition-colors duration-200 text-sm">
                                    COVID-19
                                </Link>
                            </li>
                            <li>
                                <Link href="/flu-vaccine" className="text-white hover:text-dark-blue transition-colors duration-200 text-sm">
                                    Flu Vaccine
                                </Link>
                            </li>
                            <li>
                                <Link href="/weight-loss" className="text-white hover:text-dark-blue transition-colors duration-200 text-sm">
                                    Weight Loss Program
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white hover:text-dark-blue transition-colors duration-200 text-sm">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-dark-blue">Connect With Us</h4>
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                                aria-label="Pinterest"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-white text-sm">
                            <strong>Emergency:</strong> 1122<br />
                            <strong>Appointments:</strong> (555) 123-4567
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/40 mt-8 pt-8 text-center">
                    <p className="text-white text-sm">
                        © {new Date().getFullYear()} Family Care of Hartford. All rights reserved. 
                        {/* |
                        <Link href="/privacy" className="hover:text-dark-blue ml-1 transition-colors duration-200">
                            Privacy Policy
                        </Link> |
                        <Link href="/terms" className="hover:text-dark-blue ml-1 transition-colors duration-200">
                            Terms of Service
                        </Link> */}
                    </p>
                </div>
            </div>
        </footer>
    );
}
