import React from "react";
import data from '../../db/ProductsList.json';
import Image from "next/image";

export function CustomImage({ orderOfComponents, imgHeightSize }: { orderOfComponents: string, imgHeightSize: string }) {
    return (
        <div className={`xxs:static mdl:relative ${orderOfComponents} w-full flex grow ${imgHeightSize} mdl:basis-full ${orderOfComponents.includes('mdl:order-last') ? "xxs:-ml-[28px] xxs:-mr-[28px] mdl:ml-[60px]" : "xxs:-ml-[28px] xxs:-mr-[28px] mdl:-ml-[60px] "} `}>
            <div className="absolute w-full h-full">
                < div className={`relative  flex w-full ${imgHeightSize}`}>
                    <Image
                        className='absolute object-cover'
                        src={data.ads_Join_us.src}
                        fill
                        alt='image for article'
                    />
                </ div >
            </div>
        </div>

    )
}