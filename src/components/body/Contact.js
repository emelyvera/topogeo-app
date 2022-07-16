import React from 'react'
import wss from '../../img/WhatsApp.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    return (
        <>

            <section className='body__container'>
                <div className='contact__con-sub'>
                    <FontAwesomeIcon className='contact__icon' icon={faLocationDot} />
                    <div className='contact__info'>
                        <h5>Ubicación</h5>
                        <p>Chitagá, NDS, Calle 4 N 6-49</p>
                    </div>
                </div >
                <div className='contact__con-sub'>
                    <FontAwesomeIcon className='contact__icon' icon={faPhone} />
                    <div className='contact__info'>
                        <h5>Teléfono</h5>
                        <p>314 4933302 / 321 3797414</p>
                    </div>
                </div>
                <div className='contact__con-sub'>
                    <FontAwesomeIcon className='contact__icon' icon={faEnvelope} />
                    <div className='contact__info'>
                        <h5>Mail</h5>
                        <p>topogeomvsas@gmail.com</p>
                    </div>
                </div>
            </section>
            <a href="https://wa.link/b9bmck" target='_blank' rel='noreferrer'>
                <img className='contact__wss' src={wss} alt="Whatsapp" />
            </a>

        </>
    )
}
