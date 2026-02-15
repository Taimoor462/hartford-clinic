import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ data }) => {
    return (
        <Link
            href={`/services/${data.id}`}
            className="block h-full"
        >
            <div className="w-full h-full flex flex-col">
                <div className="w-full overflow-hidden rounded-md">
                    <Image src={data.img} className="cover w-full hover:scale-125 transition-all duration-300" width={386} height={239} alt="Logo" />
                </div>
                <h3 className="mt-6 text-dark-blue2 text-xl font-semibold">{data.title}</h3>
                <p className="mt-2.5 flex-grow">{data.description}</p>
                <div
                    className="w-fit flex text-sm gap-1 items-center uppercase text-dark-blue2 mt-4 font-bold"
                >
                    Learn more <Image src="/images/svgs/arrow.svg" className="h-3" width={11} height={6} alt="arrow" />
                </div>
            </div>
        </Link>
    )
}

export default ServiceCard;