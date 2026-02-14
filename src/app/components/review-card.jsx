import { Star } from "lucide-react";

const ReviewCard = ({ rating, review, name }) => {
    return (
        <div className="rounded-sm border border-[#00000057] px-6 py-8 bg-white flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={20}
                        className={`${i < rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"}`}
                    />
                ))}
            </div>
            <p className="text-[#211C1875] text-center text-base md:text-lg italic mb-8 flex-grow">"{review}"</p>
            <h4 className="text-dark-blue font-bold text-lg pt-4 w-full">— {name}</h4>
        </div>
    )
}

export default ReviewCard;