"use client";
import { useState, useEffect } from "react";
import ReviewCard from "../components/review-card";
import Link from "next/link";
import FeedbackForm from "../components/feedback-form";

const reviews = [
    {
        id: 1,
        rating: 5,
        name: "Jessica P.",
        review: "From the front desk to the doctor, everyone was amazing. They made a stressful situation much easier to handle.",
    },
    {
        id: 2,
        rating: 5,
        name: "Robert M.",
        review: "Clean facility and short wait times. I appreciate the focus on patient care and safety protocols.",
    },
    {
        id: 3,
        rating: 5,
        name: "Linda G.",
        review: "Good service and friendly staff. The online check-in process saved me a lot of time.",
    },
    {
        id: 4,
        rating: 5,
        name: "Michael T.",
        review: "Outstanding service! I came in for a physical exam and was impressed by the detailed attention and friendly staff.",
    },
    {
        id: 5,
        rating: 5,
        name: "Emily W.",
        review: "Fast, reliable, and professional. The best urgent care experience I've had in Hartford. Will definitely return if needed.",
    },
    {
        id: 6,
        rating: 4,
        name: "David K.",
        review: "Very convenient location and hours. The doctors are knowledgeable and really listen to your concerns.",
    },
    {
        id: 7,
        rating: 5,
        name: "Jessica P.",
        review: "From the front desk to the doctor, everyone was amazing. They made a stressful situation much easier to handle.",
    },
    {
        id: 8,
        rating: 5,
        name: "Robert M.",
        review: "Clean facility and short wait times. I appreciate the focus on patient care and safety protocols.",
    },
    {
        id: 9,
        rating: 4,
        name: "Linda G.",
        review: "Good service and friendly staff. The online check-in process saved me a lot of time.",
    }
];

const Feedback = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(reviews.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
        }, 5000); // reduced to 5 seconds for better engagement

        return () => clearInterval(interval);
    }, [totalPages]);

    const currentReviews = reviews.slice(
        activeIndex * itemsPerPage,
        (activeIndex + 1) * itemsPerPage
    );

    return (
        <section className="pt-7 pb-10 md:pb-15 md:pt-10">
            <div className="custom-container text-center mb-12">
                <h2 className="text-[26px] md:text-[40px] font-semibold uppercase text-text-dark-blue">Patient Reviews</h2>
                <p className="text-base md:text-xl text-black/60 mt-4 max-w-2xl mx-auto uppercase font-medium">
                    See what our community is saying about their experience with us.
                </p>
            </div>
            <div className="bg-[#7DB5DB21] py-10">
                <div className="custom-container">
                    <div className="relative">
                        {/* Items Container with Fade Effect */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 transition-opacity duration-500 ease-in-out">
                            {currentReviews.map((review) => (
                                <ReviewCard
                                    key={review.id}
                                    rating={review.rating}
                                    name={review.name}
                                    review={review.review}
                                />
                            ))}
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-4 mt-8">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? "w-8 bg-dark-blue"
                                        : "w-3 bg-dark-blue/30 hover:bg-dark-blue/50"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <div className="space-y-2 text-center mx-auto mt-10">
                            <p className="font-semibold">4.8 Average Ratings</p>
                            <p className="font-semibold">Based on 150+ patient reviews</p>
                            <Link
                                href="#"
                                className="inline-block uppercase px-4 md:px-8 py-2 md:py-3 bg-orange font-semibold text-white border-2 border-transparent text-sm md:text-lg rounded-sm hover:bg-white hover:text-orange transition-all duration-300"
                            >
                                READ MORE REVIEWS
                            </Link>
                        </div>
                    </div>
                    <FeedbackForm />
                </div>

            </div>
        </section>
    );
};

export default Feedback;