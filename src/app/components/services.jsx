import ServiceCard from "./service-card";

 const services = [
    {
        id: 1,
        img: "/images/service-3.webp",
        title: "Botox Services",
        description: "Safe, FDA-approved Botox treatments to reduce fine lines and wrinkles, enhance facial appearance, and deliver natural-looking results with minimal downtime.",
    },
    {
        id: 2,
        img: "/images/service-4.webp",
        title: "Medical Weight Loss",
        description: "Personalized, medically supervised weight loss programs including nutritional guidance, lifestyle coaching, and treatment plans tailored to your health goals.",
    },
    {
        id: 3,
        img: "/images/service-3.webp",
        title: "Urgent Care",
        description: "Fast treatment for minor injuries, infections, fever, flu, and non-life-threatening conditions — no appointment needed.",
    },
    {
        id: 4,
        img: "/images/service-4.webp",
        title: "COVID & Flu Testing",
        description: "Rapid and reliable testing services to keep you and your family protected and informed.",
    },
    {
        id: 5,
        img: "/images/service-5.webp",
        title: "Physical Exams",
        description: "School, sports, employment, and DOT physicals performed quickly and professionally.",
    },
    {
        id: 6,
        img: "/images/service-6.webp",
        title: "Chronic Disease Management",
        description: "Ongoing care and monitoring for diabetes, hypertension, and other chronic conditions.",
    },
    {
        id: 7,
        img: "/images/service-7.webp",
        title: "Asthma & Respiratory Care",
        description: "Evaluation, treatment, and personalized plans for better breathing and lung health.",
    },
    {
        id: 8,
        img: "/images/service-8.webp",
        title: "Weight Management",
        description: "Supportive programs designed to help you achieve sustainable and healthy weight goals.",
    },
 ]

const ServicesSection = ()=> {
    return (
        <section>
            <div className="custom-container text-center py-7 md:py-10">
                <h2 className="text-[26px] md:text-[40px] font-semibold uppercase text-text-dark-blue">Our Medical Services</h2>
                <p className="text-base md:text-xl text-black/60 mt-6 uppercase max-w-180 mx-auto">Comprehensive care for individuals and families — delivered with compassion, expertise, and efficiency.</p>
            </div>
            <div className="bg-[#7DB5DB21] py-7 md:py-10">
                <div className="custom-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center">
                    {services.map((service) => (
                        <ServiceCard key={service.id} data={service} />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ServicesSection;