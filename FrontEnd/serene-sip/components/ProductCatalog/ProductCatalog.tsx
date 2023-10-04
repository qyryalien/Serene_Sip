import React from "react";
import { PlayfairDisplay } from "@/app/fonts";
import { GridItems } from "../GridItems/GridItems";

export function ProductCatalog({ catalogTitle }: { catalogTitle: string }) {
    return (
        <div className='newProducts xxs:w-full flex flex-wrap content-start flex-col gap-y-8'>
            <h3 className={`${PlayfairDisplay.className}  text-[32px] font-semibold text-darkcoldgreen leading-[125%] tracking-[-0.96px]`}>{catalogTitle}</h3>
            <GridItems></GridItems>
        </div>
    )
}