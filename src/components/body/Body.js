import React from 'react';
import logo from '../../img/logo.png'
import { useMediaQuery } from 'react-responsive'


export const Body = () => {

    const isTablet = useMediaQuery({ minWidth: 769 })
    return (
        <section className='body__container'>
            <div className='body__img'>
                <img className='nav__img cn' src={logo} alt="logo" />
            </div>
            <div className='body__info'>
                {isTablet ? <h1>TOPOGEO MV</h1> : ''}
                <p>TOPOGEO MV S.A.S, es una empresa colombiana con autonomía administrativa y patrimonio propio, tenemos más de 10 años de experiencia en: mediciones Topografías, geodésicas, servicios hidrográficos y geomáticos; proyectos de obra civil; y venta de materiales pétreos. Nuestro servicio consiste en atender y asesorar a nuestros clientes para que su solicitud (topografica, particion de propiedad, división, planos records o un levantamiento de predio,) sea orientada a la mejor solución, pues contamos con el acompañamiento judicial en caso de requerirlo y analizamos el P.O.T de cada zona donde solicitan nuestro servicio.</p>
            </div>
        </section>
    )
}
