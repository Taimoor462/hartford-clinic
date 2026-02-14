import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services";
import WhySection from "./components/why-section";

const services = [
    {
        id: 1,
        img: "/images/service-1.webp",
        title: "Botox Services",
        description: "Safe, FDA-approved Botox treatments to reduce fine lines and wrinkles, enhance facial appearance, and deliver natural-looking results.",
    },
    {
        id: 2,
        img: "/images/service-8.webp",
        title: "Medical Weight Loss",
        description: "Personalized, medically supervised weight loss programs including nutritional guidance, coaching, and treatment plans tailored to your health goals.",
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
    // {
    //     id: 7,
    //     img: "/images/service-7.webp",
    //     title: "Asthma & Respiratory Care",
    //     description: "Evaluation, treatment, and personalized plans for better breathing and lung health.",
    // }
 ]


export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection services={services} />
      <WhySection />
    </div>
  );
}

