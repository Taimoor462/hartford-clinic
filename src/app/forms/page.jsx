import FormCard from "../components/form-card";
import Image from "next/image";

const forms = [
    {
        id: 1,
        title: "NEW PATIENT REGISTRATION",
        description: "Complete your information before visit",
        link: "#",
    },
    {
        id: 2,
        title: "INSURANCE FORM",
        description: "Complete your information before visit",
        link: "#",
    },
    {
        id: 3,
        title: "test FORM",
        description: "Complete your information before visit",
        link: "#",
    },
    {
        id: 4,
        title: "MEDICAL HISTORY FORM",
        description: "Complete your information before visit",
        link: "#",
    },
    {
        id: 5,
        title: "Returning patients FORM",
        description: "Complete your information before visit",
        link: "#",
    },
]

const Forms = ({})=> {
    return (
        <section>
            <div className="custom-container text-center py-7 md:py-10">
                <h2 className="text-[26px] md:text-[40px] font-semibold uppercase text-text-dark-blue">Patient Forms</h2>
                <p className="text-base md:text-xl text-black/60 mt-4 max-w-180 mx-auto uppercase font-semibold">Save time during your visit by completing your forms online before arrival.</p>
            </div>
            <div className="bg-[#7DB5DB21] py-7 md:py-10">
                <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                    {forms.map((form) => (
                        <FormCard key={form.id} data={form} />
                    ))}
                </div>
                <div className='flex justify-center items-center gap-2.5 text-dark-blue mt-7 md:mt-10'>
                    <Image src="/images/svgs/shield.svg" width={36} height={36} alt='location' />
                    <p className=''>your information is secure</p>
                </div>
            </div>
        </section>
    )
}

export default Forms;