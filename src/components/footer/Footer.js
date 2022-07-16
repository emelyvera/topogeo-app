import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot, faCheck } from '@fortawesome/free-solid-svg-icons';
import logo from '../../img/group.png'



export const Footer = () => {

    return (
        <footer>
            <div className='footer__container'>
                <img className='footer_logo' src={logo} alt="img" />
                <div>
                    <h5>Servicios</h5>
                    <dl >
                        <dt>TOPOGRAFÍA
                            <dl className='footer__sub-serv' >
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt>Georeferenciación</dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt>Aclaraciones de áreas</dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt>Topografía y fotogrametría aerea</dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt>Englobes y desenglobes</dt>
                                </div>
                            </dl>
                        </dt>
                        <dt>GEOLOGÍA Y CIVIL
                            <dl>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt>Cartografía minera</dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt>Asesoría en legislación minera</dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt>Proyectos Viales</dt>

                                </div>
                            </dl>
                        </dt>
                        <dt>ESTUDIOS
                            <dl >
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt>Análisis físicos y químicos de suelos</dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt>Asesoria en Formilación de Proyectos</dt>
                                </div>
                                <div className='footer__sub-service'>
                                    <FontAwesomeIcon className='header__icon' icon={faCheck} />
                                    <dt>Proyectos en impacto ambiental</dt>
                                </div>
                            </dl>
                        </dt>
                    </dl>
                </div>
                <div>
                    <h5>Información</h5>
                    <div className='footer__sub-service margin'>
                        <FontAwesomeIcon className='header__icon' icon={faLocationDot} />
                        <p>Chitagá, NDS, Calle 4 N 6-49</p>
                    </div>
                    <div className="footer__sub-service margin">
                        <FontAwesomeIcon className='header__icon' icon={faPhone} />
                        <p>314 4933302 / 321 3797414</p>
                    </div>
                    <div className="footer__sub-service margin">
                        <FontAwesomeIcon className='header__icon' icon={faEnvelope} />
                        <p>topogeomvsas@gmail.com</p>
                    </div>
                    <div className="footer__sub-service margin">
                        <a href="https://web.facebook.com/profile.php?id=100078414856166" target='_blank' rel='noreferrer'><FontAwesomeIcon className='header__icon' icon={faFacebook} /></a>
                        <p>Topogeo MV</p>
                    </div>
                    <div className="footer__sub-service margin">
                        <a href="https://www.instagram.com/topogeomvsas/" target='_blank' rel='noreferrer'><FontAwesomeIcon className='header__icon' icon={faInstagram} /></a>
                        <p>topogeomvsas</p>
                    </div>
                </div>
            </div>

            <span className='emely'>©2022 by Emely Daniela Vera</span>


        </footer>

    )
}
