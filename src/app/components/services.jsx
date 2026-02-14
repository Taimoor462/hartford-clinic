import ServiceCard from "./service-card";

const ServicesSection = ({services})=> {
    return (
        <section>
            <div className="custom-container text-center py-7 md:py-10">
                <h2 className="text-[26px] md:text-[40px] font-semibold uppercase text-text-dark-blue">Our Medical Services</h2>
                <p className="text-base md:text-xl text-black/60 mt-4 font-semibold uppercase max-w-180 mx-auto">WE ACCEPT MEDICAID, MEDICARE, AND MOST OF THE INSURANCES</p>
                <p className="text-base md:text-xl text-black/60 mt-4 max-w-180 mx-auto">Comprehensive care for individuals and families — delivered with compassion, expertise, and efficiency.</p>
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