'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative gradient-background">
            <div className='custom-container pt-22'>
                {/* Background Pattern/Decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
                        {/* Left Content */}
                        <div className="text-white space-y-5 md:space-y-8 z-10">
                            <h1 className="text-[26px] lg:text-5xl font-bold leading-tight">
                                COMPASSIONATE <span className='text-text-dark-blue'>CARE</span>
                                <br />
                                <span className="text-gray-100">WHEN YOU NEED IT MOST</span>
                            </h1>

                            <p className="text-base lg:text-xl text-blue-100 max-w-xl leading-relaxed">
                                WALK-IN URGENT CARE AND FAMILY MEDICINE SERVICES IN HARTFORD. QUALITY TREATMENT, SHORTER WAIT TIMES, AND FRIENDLY STAFF.
                            </p>

                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    className="inline-block px-4 md:px-8 py-3 md:py-4 bg-dark-blue2 font-semibold text-base md:text-lg rounded-md hover:bg-white hover:text-dark-blue2 transition-all duration-300 shadow-xl hover:shadow-2xl transform "
                                >
                                    GET STARTED
                                </Link>
                            </div>
                        </div>

                        {/* Right section */}
                        <div className="relative z-10 flex items-center justify-center">
                            <div className="relative w-full">
                                {/* Placeholder for medical staff illustration */}
                                <Image src="/images/hero-img.webp" className='w-full h-auto' width={600} height={400} alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */}
                {/* <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                    </svg>
                </div> */}
            </div>
        </section>
    );
}
