export const BurgerIconYTVariant = () => {
    return (
        <>
            <label htmlFor="hamburger" className='peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer md:hidden'>
                <div aria-hidden="true" className={'bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5  peer-checked:rotate-45 peer-checked:translate-y-1 '} >
                </div>
                <div aria-hidden="true" className={'bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 opacity-100 peer-checked:opacity-0 '} >
                </div>
                <div aria-hidden="true" className={'bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 peer-checked:-rotate-45 peer-checked:-translate-y-1 '} >
                </div>
            </label>
        </>


    )
};