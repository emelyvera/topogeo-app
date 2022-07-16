import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';




export const Header = () => {
  return (
    <header>

      <div className='header__container'>
        <div className='header__mail'>
          <FontAwesomeIcon className='header__icon' icon={faEnvelope} />
          <span className='header__in'>topogeomvsas@gmail.com</span>
        </div>


        <div className='header__info'>

          <div>
            <FontAwesomeIcon className='header__icon' icon={faPhone} />
            <span className='header__in'>314 4933302 / 321 3797414</span>
          </div>

          <div >
            <a href="https://web.facebook.com/profile.php?id=100078414856166" target='_blank' rel='noreferrer'><FontAwesomeIcon className='header__icon start' icon={faFacebook} /></a>
            <a href="https://www.instagram.com/topogeomvsas/" target='_blank' rel='noreferrer'><FontAwesomeIcon className='header__icon start' icon={faInstagram} /></a>
          </div>

        </div>
      </div>


    </header>
  )
}
