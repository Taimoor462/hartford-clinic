import ServicesSection from "../components/services";
import { services } from "../data/servicesData";

export default function Services() {
    return (
        <div>
            <ServicesSection services={services} />
        </div>
    );
}

