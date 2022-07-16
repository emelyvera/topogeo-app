import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Navegation } from './Navegation';


export const Burger = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <FontAwesomeIcon className='burger__prin' open={open} onClick={() => setOpen(!open)} icon={faBars} />

            <div className={open ? 'burger__nav' : 'burger__nav-close'}>
                <div className='burger__exit'>
                    <FontAwesomeIcon open={open} onClick={() => setOpen(!open)} icon={faXmark} />
                </div>

                 <Navegation /> 

            </div>
        </>
    )
}
