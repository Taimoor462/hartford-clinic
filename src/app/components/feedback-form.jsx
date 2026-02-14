import Link from "next/link";

const FeedbackForm = () => {
    return (
        <div className="custom-container pt-16">
            <h2 className="text-[26px] text-center md:text-[40px] font-semibold uppercase text-text-dark-blue">GIVE YOUR FEEDBACK</h2>
            <p className="text-center">We value your opinion. Please share your feedback to help us improve our services.</p>
            <form action="" className="flex flex-col gap-4 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-15">
                    <input type="text" placeholder="Name" className="outline-none focus:border-orange border bg-white border-gray-300 rounded-sm px-4 py-2" />
                    <input type="email" placeholder="Email" className="outline-none focus:border-orange border bg-white border-gray-300 rounded-sm px-4 py-2" />
                </div>
                <textarea name="" id="" placeholder="Feedback" rows={5} className="outline-none focus:border-orange border bg-white border-gray-300 rounded-sm px-4 py-2"></textarea>
                <Link
                    href="#"
                    className="w-fit uppercase px-4 md:px-8 py-2 md:py-3 bg-orange font-semibold text-white border-2 border-transparent text-sm md:text-lg rounded-sm hover:bg-white hover:text-orange transition-all duration-300 shadow-xl hover:shadow-2xl transform"
                >
                    Submit
                </Link>
            </form>
        </div>
    );
};

export default FeedbackForm;