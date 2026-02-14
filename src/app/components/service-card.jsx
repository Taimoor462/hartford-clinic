import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({data}) => {
    return (
        <div className="w-full">
            <Image src={data.img} className="rounded-md cover w-full cursor-pointer" width={386} height={239} alt="Logo" />
            <h3 className="mt-6 text-dark-blue2 text-xl font-semibold">{data.title}</h3>
            <p className="mt-2.5 min-h-18">{data.description}</p>
             <Link
                href="#"
                className="w-fit flex text-sm gap-1 items-center uppercase text-text-dark-blue mt-4 font-bold"
            >
                Learn more <Image src="/images/svgs/arrow.svg" className="h-3" width={11} height={6} alt="arrow" />
            </Link>
        </div>
    )
}

export default ServiceCard;