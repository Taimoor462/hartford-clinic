'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative gradient-background">
            <div className='custom-container'>
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 md:py-10">
                        {/* Left Content */}
                        <div className="text-white z-10">
                            <h1 className="text-[26px] lg:text-5xl font-bold leading-tight">
                                COMPASSIONATE <span className='text-text-dark-blue'>CARE</span>
                                <br />
                                <span className="text-gray-100">WHEN YOU NEED IT MOST</span>
                            </h1>
                            <div className='h-0.5 my-3 bg-[#D9D9D980] w-full max-md:max-w-85'></div>

                            <p className="text-base lg:text-xl text-blue-100 max-w-xl leading-relaxed uppercase">
                                Walk-in urgent care and family medicine services in Hartford.
                            </p>
                            <div className='flex items-center gap-2 mt-8'>
                                <Image src="/images/svgs/pin.svg" width={23} height={23} alt='location' />
                                <p className='uppercase'>556 Zion Street, Hartford, CT</p>
                            </div>
                            <div className='h-0.5 my-4 bg-[#D9D9D980] w-full max-w-75'></div>
                            <div className='flex items-center gap-2'>
                                <Image src="/images/svgs/clock.svg" width={23} height={23} alt='location' />
                                <p className='uppercase'> OPEN TODAY  9:00 am – 6:00 pm </p>
                            </div>

                            <div className="flex gap-5 items-center flex-wrap pt-8">
                                <Link
                                    href="#"
                                    className="inline-block uppercase px-4 md:px-8 py-2 md:py-3 bg-orange font-semibold text-white border-2 border-transparent text-sm md:text-lg rounded-sm hover:bg-white hover:text-orange transition-all duration-300 shadow-xl hover:shadow-2xl transform"
                                >
                                    Book Appointment
                                </Link>
                                <Link
                                    href="#"
                                    className="flex justify-center items-center px-4 md:px-8 py-2 md:py-3 font-semibold text-white uppercase border-2 text-sm md:text-lg border-white rounded-sm hover:bg-white hover:text-orange transition-all duration-300 transform "
                                >
                                    Directions
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
