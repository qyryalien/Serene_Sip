import Image from 'next/image'
import Link from 'next/link'
import { WorkSans } from "@/app/fonts"
import { BurgerIconServerVariant } from '../UI/MenuBurger/BurgerIconServerVariant'
import IconFavorite from '../Icons/IconFavorite/IconFavorite'
import IconShoppingBasket from '../Icons/IconShoppingBasket/IconShoppingBasket'

export function HeaderYT() {
    return (
        <header className={`${WorkSans.className}`}>
            <div className="relative z-20 w-full h-[120px] bg-lightest md:container  mx-auto xxs:py-4 mdl:py-10 xxs:px-7 mdl:px-15">
                <div className="flex justify-between items-center ">
                    <div className='relative z-20 xxs:w-[122px] xd:w-[150px] mdl:w-[181px]  h-[40px]'>
                        <Link href="/" className="w-full h-full">
                            <Image
                                src="/header/logo/Logo.svg"
                                fill
                                alt="Main logo 'Serene Sip'"
                            />
                        </Link>
                    </div>
                    <input type="checkbox" name="hamburger" id="hamburger" className='peer ' hidden />
                    <BurgerIconServerVariant></BurgerIconServerVariant>
                    <nav id="menu" className="peer-checked:translate-x-0 fixed inset-0 w-full translate-x-[-100%] bg-lightest border-r shadow-xl md:border-l-0 md:w-auto md:static md:shadow-none md:translate-x-0"
                    >
                        <Link href="/" className='hover:text-green hover:underline underline-offset-4 duration-100'>Home</Link>
                        <Link href="/" className='hover:text-green hover:underline underline-offset-4 duration-100'>Locations</Link>
                        <Link href="/" className='hover:text-green hover:underline underline-offset-4 duration-100'>Shop</Link>
                    </nav>
                    {/* <div className="right-side ml-2  flex md:gap-x-[45px] gap-x-[80px] items-center justify-between">



                        <div className="icon buttton flex xxs:gap-x-4 mdl:gap-x-8">
                            <div className="icons flex xxs:gap-x-4 mdl:gap-x-8">
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
                        </div>

                    </div> */}
                </div>


            </div>
        </header>
    )
}