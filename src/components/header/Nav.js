import React from 'react'
import { useMediaQuery } from 'react-responsive';
import logo from '../../img/logo.png'
import { Navegation } from './Navegation';
import { Burger } from './Burger';

export const Nav = () => {

    const isMobile = useMediaQuery({ maxWidth: 480 })
    const isTabletOrDesktop = useMediaQuery({ minWidth: 481 });

    const getInfoForRender = () => {

        if (isTabletOrDesktop) {
            return <Navegation />
        }

        if (isMobile) {
            return <Burger />
        }

    }

    return (
        <nav>

            <img className='nav__img' src={logo} alt="logo" />

            {getInfoForRender()}

        </nav>
    )
}
