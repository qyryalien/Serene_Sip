import React from "react";
import { WorkSans } from "@/app/fonts";
import { CustomImage } from "../CustomImage/CustomImage";
import { Description } from "../Description/Description";
import Image from "next/image";

// добавить возможность отсутствие картинки в статье  
export function ArticleBlock({ orderOfComponents, imgHeightSize }: { orderOfComponents: string, imgHeightSize: string }) {
    return (
        <section className={`${WorkSans.className} relative bg-lightest xxs:px-7 mdl:px-15 `}>
            <div className={`xxs:flex xxs:flex-col xxs:flex-wrap mdl:grid  grid-rows-1 ${orderOfComponents.includes('mdl:order-last') ? "mdl:grid-cols-[minmax(30%,1fr)_50vw]" : "mdl:grid-cols-[50vw_minmax(30%,1fr)]"} `} >
                <CustomImage orderOfComponents={orderOfComponents} imgHeightSize={imgHeightSize}></CustomImage>
                <Description>
                    <div className=' flex flex-grow basis-auto xxs:w-full xs:w-max border border-green rounded-lg xxs:justify-between md:gap-x-2 px-4 py-2 '>
                        <p className={`${WorkSans.className} text-dark tracking-[-0.48px]`}>
                            See all products
                        </p>
                        <div className='relative w-6 h-6 '>
                            <Image
                                className='absolute object-cover'
                                src='/home/chevron-right.svg'
                                width={24}
                                height={24}
                                alt='icon chevron right'
                            ></Image>
                        </div>
                    </div>
                </Description>
            </div>
        </section>
    )
}