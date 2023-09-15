// import style from "./Header.module.scss";
import "./Header.scss";
// import { stylesConverter } from "./t.js";

export default function Header() {
    return (
        // <header className={style.header}>
        //     <div className={`${style.header} ${style.container}`}>
        //         <div className={`${style.header} ${style.logo}`}>Image</div>
        //         {/* <div className={`${`${style.header} ${style.rightSide}`} ${style.rightSide}`}> */}
        //         <div className={`${style.header} ${style.rightSide} ${style.rightSide}`}>
        //             <div className={`${style.rightSide} ${style.links}`}>A</div>
        //             <div className={`${style.rightSide} ${style.icons}`}>B</div>
        //             <div className={`${style.rightSide} ${style.button}`}>C</div>
        //         </div>
        //     </div>
        // </header>

        //    <header className={stylesConverter["header"]}>
        //         <div className={stylesConverter["header__container"]}>
        //             <div className={stylesConverter["header__logo"]}>Image</div>
        //             <div className={`${stylesConverter["header__right-side"]} ${stylesConverter["right-side"]}`}>
        //                 <div className="right-side__links">A</div>
        //                 <div className="right-side__icons">B</div>
        //                 <div className="right-side__button">C</div>
        //             </div>
        //         </div>
        //         <button></button>
        //     </header>

        <header className="header">
            <div className="header__container">
                <div className="header__logo">Image</div>
                <div className="header__right-side right-side">
                    <div className="right-side__links">A</div>
                    <div className="right-side__icons">B</div>
                    <div className="right-side__button">C</div>
                </div>
            </div>
            <button></button>
        </header>
    )

}