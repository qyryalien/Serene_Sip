"use client"
import React, { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);


    const handleClick = () => {
        setIsOpen(!isOpen);
        const burgerButton = document.getElementById("burger");
        // const burgerButton = document.getElementById('burgerButton');
        const menu = document.getElementById('menu');

        burgerButton!.addEventListener('click', () => {
            menu!.classList.toggle('xxs:-translate-x-[100%]');
        });
    };

    return (
        <span id="burger" className='self-center xxs:block md:hidden peer'>
            <button onClick={handleClick} className="flex flex-col my-auto justify-center items-center">

                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    ${isOpen
                        ? 'rotate-45 translate-y-1'
                        : '-translate-y-0.5'
                    }`} >
                </span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                    ${isOpen
                        ? 'opacity-0'
                        : 'opacity-100'
                    }`} >
                </span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    ${isOpen
                        ? '-rotate-45 -translate-y-1'
                        : 'translate-y-0.5'
                    }`} >
                </span>

            </button>
        </span>


    )
};

export default Nav