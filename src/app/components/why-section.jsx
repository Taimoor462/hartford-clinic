import CustomVideoPlayer from "./CustomVideoPlayer";

const WhySection = ()=> {
    return (
        <section className="pb-15">
            <div className="custom-container py-8">
                <h2 className="mb-8 text-center text-[26px] md:text-[40px] font-semibold uppercase text-text-dark-blue">Why family care of Hartford?</h2>
                <CustomVideoPlayer wrapperClass="max-h-[540px]" src="/videos/video.mp4" />
            </div>
            <div className="bg-[#EEF6FA] py-10">
                <div className="custom-container">
                    <h4 className="font-bold uppercase text-lg">When you don’t need to go to the ER for a life-threatening situation or when your doctor can’t see you, come to Kathy’s Urgent Care for:</h4>
                    <ul className="pl-8 mt-8 text-[#000000C2s]">
                        <li className="list-disc ">Expert medical care when you need it.</li>
                        <li className="list-disc ">Convenient weekend and evening hours.</li>
                        <li className="list-disc ">Less wait time and expense than the ER.</li>
                        <li className="list-disc ">Prompt physical exams for immigration, employment, DOT, school, sports.</li>
                        <li className="list-disc ">Lab tests, vaccinations, sutures, casting, respiratory treatment, and more.</li>
                        <li className="list-disc ">We accept CT Husky (Medicaid), Medicare and most insurance plans.</li>
                    </ul>
                    <p className="text-base font-medium mt-8">Family care of Hartford provides high quality, compassionate, urgent, walk -in medical care to improve patients’ lives and their local communities in the Greater Hartford region. We treat non-life-threatening injuries and illnesses and provide routine preventative care such as physical examinations and inoculations. Most insurance plans, including Medicare and Medicaid (CT Husky) are accepted.
                        Muhammad A Zubairi chief medical officer, remarks, “I founded family Care of Hartford to provide people of Hartford with high quality health care without the hassle of long wait times or inconvenient hours. I want to give people the health care they deserve and entitled being living in greater hartford.” <br />
                        Family care of Hartford practice is commitment to community-centered health care grows out of his experience in hospitals, nursing homes, primary clinics and urgent care clinics. Being working in urgent care clinics, he believes, helps provide services that keep up with the real and changing needs of our communities. <br />
                        In addition to his clinical experience, Muhammad Zubairi is a board-certified APRN · He is also trained in Pakistan as a doctor and worked in different residency programs in medicine, surgery and pulmonology in Pakistan. <br />
                        He continues to enjoy mentoring physician assistants, advanced practice registered nurses, and future medical students as he cares for his patients. <br />
                        Family Care of Hartford</p>
                </div>
            </div>
        </section>
    )
}

export default WhySection;