import Image from 'next/image'
import Link from 'next/link'
import { WorkSans } from "@/app/fonts"
import { BurgerIconServerVariant } from '../UI/MenuBurger/BurgerIconServerVariant'
import IconFavorite from '../Icons/IconFavorite/IconFavorite'
import IconShoppingBasket from '../Icons/IconShoppingBasket/IconShoppingBasket'

export default function Header() {
    return (
        <>
            <header className={`header ${WorkSans.className} fixed z-10 w-full bg-lightest`}>
                <div className=" flex flex-auto xxs:justify-between items-center xxs:py-4 mdl:py-10 xxs:px-7 mdl:px-15">
                    <div className="relative z-50 xxs:w-[122px] md:w-[150px] mdl:w-[181px] h-[40px]">
                        <Link href="/" className="w-full h-full">
                            <Image
                                src="/header/logo/Logo.svg"
                                fill
                                alt="Main logo 'Serene Sip'"
                            />
                        </Link>
                    </div>

                    <div className="ml-2 flex  z-20 md:gap-x-[35px] lg:gap-x-[60px] items-center content-end">
                        <input type="checkbox" name="hamburger" id="hamburger" className='peer ' hidden />
                        <nav id="menu" className="
                                    lg:gap-x-[60px]  transition-all lg:text-lg

                                    md:static md:-translate-x-0 md:bg-lightest md:text-base md:pt-0 
                                    md:flex-row md:gap-x-[35px] md:content-end columns-3 md:w-auto

                                    xxs:fixed xxs:z-[5] z-0 xxs:top-0 xxs:left-0 xxs:w-full xxs:h-full duration-300 ease-in-out 
                                    xxs:-translate-x-[100%] peer-checked:-translate-x-[0%] xxs:bg-lightest xxs:pt-[120px]
                                    xxs:flex xxs:flex-col xxs:gap-y-15 xxs:text-3xl xxs:font-normal xxs:text-center 
                                    "
                        >
                            <Link href="/" className='hover:text-green hover:underline underline-offset-4 duration-100 last:'>Home</Link>
                            <Link href="/" className='hover:text-green hover:underline underline-offset-4 duration-100 last:'>Locations</Link>
                            <Link href="/" className='hover:text-green hover:underline underline-offset-4 duration-100 last:'>Shop</Link>
                        </nav>
                        <div className="z-20  flex xxs:gap-x-4 mdl:gap-x-8">
                            <IconFavorite
                                className='duration-100 hover:fill-green self-center'
                            ></IconFavorite>
                            <IconShoppingBasket
                                className='duration-100 hover:fill-green self-center'
                            ></IconShoppingBasket>
                        </div>
                        <Link href="/sign-in">
                            <button className="xxs:hidden md:block ml-2 md:px-3 mdl:px-4 md:py-1 mdl:py-2 bg-green rounded-lg text-base">Sign in | Register</button>
                        </Link>
                        <BurgerIconServerVariant></BurgerIconServerVariant>
                    </div>
                </div>
            </header>
        </>
    )
}