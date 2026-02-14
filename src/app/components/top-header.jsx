import Image from "next/image";

const TopHeader = ()=> {
    return (
        <div className="bg-orange py-3">
            <div className="custom-container flex flex-wrap gap-x-4 gap-y-2 md:gap-x-8 xl:gap-x-12 justify-center items-center text-white text-[10px] sm:text-xs lg:text-sm">
                <div className='flex items-center gap-2 lg:order-1'>
                    <Image src="/images/svgs/pin.svg" width={23} height={23} alt='location' />
                    <p className='uppercase'>556 Zion Street, Hartford, CT</p>
                </div>
                <div className='flex items-center gap-2 lg:order-3'>
                    <Image src="/images/svgs/phone.svg" width={23} height={23} alt='location' />
                    <p className='uppercase'> 864-471-4400 </p>
                </div>
                <div className='flex items-center gap-2 lg:order-2'>
                    <Image src="/images/svgs/clock.svg" width={23} height={23} alt='location' />
                    <p className='uppercase'> Monday – Friday 9:00 am – 6:00 pm   Saturday 10:00 am – 3:00 pm </p>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;