import { WorkSans } from "@/app/fonts"

export default function Header() {
    return (
        <header className={`header ml-14 ${WorkSans.className}`}>
            <div className="container mx-auto px-10">
                <div className="header__logo"><a href="" className="header__logo"><img data-src="../img/logo.svg" alt="" /></a></div>
                <div className="flex flex-row gap-x-7 text-3xl font-normal">
                    <div className="">Aa</div>
                    <div className="">Bb</div>
                    <div className="">Cc</div>
                </div>
            </div>
            <button></button>
        </header>
    )
}