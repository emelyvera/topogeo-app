import React from 'react'

export const Navegation = () => {
    return (
        <ul className='nav__general'>
            <li className='nav__li-general'>TOPOGRAFÍA
                <ul className='nav__sub'>
                    <li>Georeferenciación</li>
                    <li>Aclaraciones de áreas</li>
                    <li>Topografía y fotogrametría aerea</li>
                    <li>Englobes y desenglobes</li>
                </ul>
            </li>
            <li className='nav__li-general'>GEOLOGÍA Y CIVIL
                <ul className='nav__sub'>
                    <li>Cartografía minera</li>
                    <li>Asesoría en legislación minera</li>
                    <li>Proyectos Viales</li>
                </ul>
            </li>
            <li className='nav__li-general'>ESTUDIOS
                <ul className='nav__sub'>
                    <li>Análisis físicos y químicos de suelos</li>
                    <li>Asesoria en Formulación de Proyectos</li>
                    <li>Proyectos en impacto ambiental</li>
                </ul>
            </li>
        </ul>
    )
}
