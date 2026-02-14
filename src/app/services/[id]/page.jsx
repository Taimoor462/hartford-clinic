import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "../../data/servicesData";

export async function generateStaticParams() {
    return services.map((service) => ({
        id: service.id.toString(),
    }));
}

export default async function ServiceDetails({ params }) {
    const { id } = await params;
    const service = services.find((s) => s.id === parseInt(id));

    if (!service) {
        notFound();
    }

    return (
        <main className="">
            <div className="">
                {/* Hero Section: Left Details, Right Image */}
                <div className="gradient-background py-8">
                    <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center">
                            <h2 className="my-4 md:my-6 text-3xl md:text-5xl font-bold text-white leading-tight">
                                {service.title}
                            </h2>
                            <p className="text-base lg:text-lg text-white leading-relaxed">
                                {service.fullDescription}
                            </p>
                            <div className="pt-4 lg:pt-10">
                                <Link
                                    href="#"
                                    className="inline-block px-4 md:px-8 py-3 md:py-4 bg-dark-blue2 font-semibold text-white text-base md:text-lg rounded-md hover:bg-white hover:text-dark-blue2 transition-all duration-300 shadow-xl hover:shadow-2xl transform "
                                >
                                    GET STARTED
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative w-full h-75 lg:h-100 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={service.img}
                                alt={service.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Details Grid */}
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <h2 className="text-2xl md:text-3xl font-semibold text-text-dark-blue mb-8 border-b border-gray-200 pb-4">
                        Service Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {service.details && service.details.map((detail, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />
                                <p className="text-gray-700 text-lg leading-relaxed">{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
