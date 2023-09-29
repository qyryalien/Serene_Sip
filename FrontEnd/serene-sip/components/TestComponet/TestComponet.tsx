import Image from 'next/image'
import Link from 'next/link'
import { WorkSans } from "@/app/fonts"
import { BurgerIconServerVariant } from '../UI/MenuBurger/BurgerIconServerVariant'
import IconFavorite from '../Icons/IconFavorite/IconFavorite'
import IconShoppingBasket from '../Icons/IconShoppingBasket/IconShoppingBasket'

export default function TestComponet() {
    return (
        <footer className={`header ${WorkSans.className} relative z-[10] w-full h-[120px] bg-lightest`}>
            <div className="container flex flex-auto xxs:justify-between items-center mx-auto xxs:py-4 mdl:py-10 xxs:px-7 mdl:px-15">
                <div className="relative xxs:w-[122px] xd:w-[150px] mdl:w-[181px]  h-[40px]">
                    <Link href="/" className="w-full h-full">
                        <Image
                            src="/header/logo/Logo.svg"
                            fill
                            alt="Main logo 'Serene Sip'"
                        />
                    </Link>
                </div>

                <div className="right-side ml-2  flex md:gap-x-[45px] gap-x-[80px] items-center justify-between">
                    {/* <BurgerIconServerVariant></BurgerIconServerVariant> */}
                    <input type="checkbox" name="hamburger" id="hamburger" className='peer ' hidden />
                    <nav id="menu" className="links md:flex md:gap-x-[45px] gap-x-[80px] text-base transition-all font-normal 
                                     static md:-translate-x-0 md:bg-inherit
                                     xxs:fixed xxs:z-[5] z-0 xxs:top-0 xxs:left-0 xxs:w-full xxs:h-full duration-300 ease-in-out xxs:-translate-x-[100%] peer-checked:-translate-x-[0%] xxs:bg-slate-100"
                    >
                        <Link href="/" className='hover:text-green hover:underline underline-offset-4 duration-100'>Home</Link>
                        <Link href="/" className='hover:text-green hover:underline underline-offset-4 duration-100'>Locations</Link>
                        <Link href="/" className='hover:text-green hover:underline underline-offset-4 duration-100'>Shop</Link>
                    </nav>
                    <div className="icon buttton flex xxs:gap-x-4 mdl:gap-x-8">
                        <div className="icons flex xxs:gap-x-4 mdl:gap-x-8">
                            <IconFavorite
                                className='duration-100 hover:fill-green self-center'
                            ></IconFavorite>
                            <IconShoppingBasket
                                className='duration-100 hover:fill-green self-center'
                            ></IconShoppingBasket>
                            {/* <BurgerIconServerVariant></BurgerIconServerVariant> */}
                        </div>
                        <Link href="/sign-in">
                            <button className="xxs:hidden md:block ml-2 md:px-3 mdl:px-4 md:py-1 mdl:py-2 bg-green rounded-lg text-base">Sign in | Register</button>
                        </Link>
                    </div>
                    <BurgerIconServerVariant></BurgerIconServerVariant>
                </div>
            </div>
        </footer>
    )
}