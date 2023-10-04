import React from "react";
import { WishlistIconFavorite } from '@/components/Icons/WishlistIconFavorite/WishlistIconFavorite';
import { WorkSans, PlayfairDisplay } from "@/app/fonts";
import Image from "next/image";
import { Product } from "@/api/productsTypes";

export function ProductCard({ product, index }: { product: Product, index: number }) {
    return (
        <div className={`flex flex-col border border-green rounded-lg ${index >= 4 && 'max-lg:hidden'}`} key={product.id}>
            <div className='relative w-full h-[224px]'>
                <Image
                    className='absolute object-cover rounded-t-lg'
                    src={product.image}
                    fill
                    alt={product.title}
                ></Image>
                <WishlistIconFavorite className='absolute right-4 top-4'></WishlistIconFavorite>
            </div>
            <div className='flex flex-col gap-y-6 p-4'>
                <div>
                    <h5 className={`${PlayfairDisplay.className} text-xl tracking-[-0.6px] font-semibold text-dark`}>{product.title}</h5>
                    <div className={`${WorkSans.className} text-grey-3 tracking-[-0.48px] pt-2`}>Price: {product.price}€</div>
                </div>
                <div className='flex flex-grow basis-auto items-center xxs:w-full xls:w-[50%] xs:w-max  bg-green rounded-lg xxs:justify-between md:gap-x-2 px-4 py-2 '>
                    <p className={`${WorkSans.className} w-full xxs:text-center xs:text-left font-normal tracking-[-0.48px] text-black`}>Add to cart</p>
                    <div className='relative w-6 h-6 xxs:hidden xs:block'>
                        <Image
                            className='absolute top-[50%] -translate-y-[50%] object-cover'
                            src='/home/chevron-right.svg'
                            width={24}
                            height={20}
                            alt='icon chevron right'
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}