import React, { FC, PropsWithChildren } from "react";
import { PlayfairDisplay } from "@/app/fonts";
import data from '../../db/ProductsList.json';

export const Description: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex w-full shrink flex-auto">
            <div className="self-center w-full flex flex-col gap-y-10 xxs:py-16 mdl:py-0">
                <div className=' flex flex-col gap-y-8'>
                    <h2 className={`${PlayfairDisplay.className} font-semibold xxs:text-[40px] xxs:leading-[120%] xxs:tracking-[-1.2px]`}>Tranquility in Every Sip</h2>
                    <div className='flex flex-col gap-y-2 xxs:tracking-[-1.2px]'>
                        {data.ads_Join_us.description.texts.map(text => <p>{text}</p>)}
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}