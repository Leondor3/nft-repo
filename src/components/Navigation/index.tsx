import { useState } from 'react';
import Hamburger from 'hamburger-react'
import { NavigationDesktop } from './desktop';
import { NavigationMobile } from './mobile';

export function Navigation() {
    const [isBurger, setIsBurger] = useState(false);

    function openBurger() {
        setIsBurger(!isBurger);
    }

    return (
        <>
            <button onClick={openBurger} className={`text-white z-30 ${isBurger == true ? "absolute  left-4" : ""} hidden max-md:block`}>
                <Hamburger toggled={isBurger} toggle={setIsBurger} />
            </button>
            {isBurger && <NavigationMobile />}
            <NavigationDesktop />
        </>
    )
}