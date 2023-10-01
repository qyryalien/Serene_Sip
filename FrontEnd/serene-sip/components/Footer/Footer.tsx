import Link from "next/link"
import Image from "next/image"
import { WorkSans, PlayfairDisplay } from "@/app/fonts"

export default function Footer() {
    return (
        <footer >
            <div className={`${WorkSans.className} flex xxs:flex-col md:grid md:grid-cols-[300px_minmax(0,_auto)] md:grid-rows-[minmax(0,_1fr)_minmax(0,_auto)] xxs:gap-y-8 md:gap-y-16 px-7 py-10 bg-green`}>
                <div className="leftSideFooter flex flex-col items-start content-start gap-y-8 max-w-[288px]">
                    <div className=" relative logo xxs:w-[122px] md:w-[150px] mdl:w-[181px] h-[40px]">
                        <Link href="/" className="w-full h-full">
                            <Image
                                src="/header/logo/Logo.svg"
                                fill
                                alt="Main logo 'Serene Sip'"
                            />
                        </Link>
                    </div>

                    <div className="SubscribeNews w-full flex flex-col items-start content-start gap-y-4 text-base">
                        <p className="">Subscribe to be the first to know about our special offers and events</p>

                        <div className="w-full">
                            <label htmlFor="EmailSubscribeNews" className="text-grey-3 tracking-tighter">Email</label>
                            <input
                                type="email"
                                name="EmailSubscribeNews"
                                id="EmailSubscribeNews"
                                placeholder="Your email"
                                className="w-full p-4 bg-white mt-2 rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="sosials flex gap-x-4 items-center">


                        <Link href="/" className="relative w-14 h-14">
                            <Image
                                src="/footer/facebook.svg"
                                fill
                                alt="Main logo 'Serene Sip'"
                                className="bg-white p-4 rounded-full"
                            />
                        </Link>
                        <Link href="/" className="relative w-14 h-14">
                            <Image
                                src="/footer/twitter.svg"
                                fill
                                alt="Main logo 'Serene Sip'"
                                className="bg-white p-4 rounded-full"
                            />
                        </Link>


                        <Link href="/" className="relative w-14 h-14 ">
                            <Image
                                src="/footer/instagram.svg"
                                fill
                                alt="Main logo 'Serene Sip'"
                                className="bg-white p-4 rounded-full"
                            />
                        </Link>
                    </div>
                </div>

                <div className="links text-sm w-full xxs:flex md:grid md:justify-self-end md:grid-cols-[2fr_1fr_1fr] mdl:grid-cols-[1fr_1fr_1fr] xxs:flex-col sm:flex-row items-start xxs:gap-y-16 xxs:gap-x-16 md:gap-x-6 max-w-[649px]">
                    <div className="flex flex-col  items-start content-start gap-y-4">
                        <h2 className={`${PlayfairDisplay.className} text-xl font-semibold tracking-tighter`}>Locations</h2>
                        <Link href="/">Serene Sip Downtown</Link>
                        <Link href="/">Serene Sip Downtown</Link>
                        <Link href="/">Serene Sip Downtown</Link>
                    </div>

                    <div className="flex flex-col items-start content-start gap-y-4">
                        <h2 className={`${PlayfairDisplay.className} text-xl font-semibold tracking-tighter`}>Shop</h2>
                        <Link href="/">Coffee</Link>
                        <Link href="/">Tea</Link>
                        <Link href="/">Cakes</Link>
                        <Link href="/">Pastries</Link>
                        <Link href="/">Gift cards</Link>
                    </div>

                    <div className="flex flex-col items-start content-start gap-y-4">
                        <h2 className={`${PlayfairDisplay.className} text-xl font-semibold tracking-tighter`}>About us</h2>
                        <Link href="/">About us</Link>
                        <Link href="/">Career</Link>
                        <Link href="/">FAQs</Link>
                        <Link href="/">Contact us</Link>
                    </div>
                </div>

                <div className="footerBottom w-full flex xxs:text-sm xxs:flex-col-reverse 
                                sm:justify-between gap-y-4 sm:flex-row  md:col-span-2
                                ">
                    <p>©2023 Serene Sip. All rights reserved</p>
                    <div className="flex xxs:gap-x-6 md:gap-x-16 underline ">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}