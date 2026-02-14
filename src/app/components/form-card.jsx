import Image from "next/image";
import Link from "next/link";

const FormCard = ({data}) => {
    return (
        <div className="w-full bg-white rounded-sm border border-[#00000052] p-4 lg:p-7.5">
            <div className="flex items-center gap-2">
                <Image src="/images/svgs/board.svg" width={65} height={65} alt="board" />
                <div className="space-y-2">
                    <h4 className="font-bold uppercase text-dark-blue">{data.title}</h4>
                    <p className="text-[#00000070]">{data.description}</p>
                </div>
            </div>
            <div className="flex gap-2 items-center pt-8">
                <Link
                    href={data.link}
                    className="flex justify-center items-center min-w-30 lg:min-w-37 uppercase px-2 py-2.5 lg:px-3.5 lg:py-3 bg-orange font-semibold text-white border border-transparent text-sm lg:text-lg rounded-sm hover:bg-white hover:border-orange hover:text-orange transition-all duration-300 transform"
                >
                    Fill Online
                </Link>
                <Link
                    href="#"
                    className="flex justify-center items-center w-full px-2 py-2.5 lg:px-3.5 lg:py-3 font-semibold text-dark-blue uppercase border text-sm lg:text-lg border-dark-blue rounded-sm hover:bg-white hover:text-dark-blue transition-all duration-300 transform "
                >
                    Download PDF
                </Link>
            </div>

        </div>
    )
}

export default FormCard;