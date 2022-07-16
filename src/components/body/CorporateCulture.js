import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';

export const CorporateCulture = () => {
    const [state, setState] = useState({
        culture: false,
        mision: false,
        vision: false,
        experience: false,
        cliente: false
    });
    const isMobile = useMediaQuery({ maxWidth: 480 })

    const handleClick = (n) => {
        switch (n) {
            case '1':
                setState({
                    culture: true,
                    mision: false,
                    vision: false,
                    experience: false,
                    cliente: false
                });
                break;
            case '2':
                setState({
                    culture: false,
                    mision: true,
                    vision: false,
                    experience: false,
                    cliente: false
                });
                break;
            case '3':
                setState({
                    culture: false,
                    mision: false,
                    vision: true,
                    experience: false,
                    cliente: false
                });
                break;
            case '4':
                setState({
                    culture: false,
                    mision: false,
                    vision: false,
                    experience: true,
                    cliente: false
                });
                break;
            case '5':
                setState({
                    culture: false,
                    mision: false,
                    vision: false,
                    experience: false,
                    cliente: true
                });
                break;
            default:
                break;
        }

    }

    const getInfo = () => {
        if (state.culture) {
            return <p className='culture__text'>Nos destacamos en el mercado como una empresa altamente comprometida, cuyo punto focal es el “servicio al cliente”, brindando cumplimiento, precios competitivos y garantía en cada uno de nuestros servicios y proyectos, así como materiales certificados y personal idóneo y calificado.</p>
        }
        if (state.mision) {
            return <p className='culture__text'>Brindar a nuestros clientes productos con altos estándares de calidad y cumplimiento como proveedores de servicios especializados en: topografía, geodesia, obras civiles, y suministro de agregados pétreos; teniendo como premisas: precios competitivos, agilidad, rapidez y amabilidad.</p>
        }
        if (state.vision) {
            return <p className='culture__text'>Para el año 2030, posicionar en el mercado colombiano a M&G INGENIERÍA Y EQUIPOS S.A.S, como la empresa que a nivel nacional brinda las mejores soluciones a sus clientes, como prestadora de servicios topográficos y en general de proyectos de obra civil ; alcanzando alto reconocimiento en la industria</p>
        }
        if (state.experience) {
            return <p className='culture__text'>Contamos con una amplia experiencia en cada servicio que ofrecemos, desde la topografia, geodesia, obra civil, como tambien en la venta de los materiales, nuestro equipo de trabajo es especialista en cada sector que trabajamos, y por esa razón estamos seguros de ofrecerle un servicio de alta calidad y materiales según sus necesidades.</p>
        }
        if (state.cliente) {
            return <p className='culture__text'>Nos destacamos en el mercado como una empresa altamente comprometida, cuyo punto focal es el “servicio al cliente”, brindando cumplimiento, precios competitivos y garantía en cada uno de nuestros servicios y proyectos, así como materiales certificados y personal idóneo y calificado.</p>
        }

    }

    return (
        <div className='culture__div'>
            <section className='culture__container'>
                {isMobile ?
                    <div className='culture__con-btn'>
                        <button className='culture__btn' onClick={() => { handleClick('1') }}>CULTURA EMPRESARIAL</button>
                        {state.culture ? getInfo() : '' }
                        <button className='culture__btn' onClick={() => { handleClick('2') }}>MISIÓN</button>
                        {state.mision ? getInfo() : '' }
                        <button className='culture__btn' onClick={() => { handleClick('3') }}>VISIÓN</button>
                        {state.vision ? getInfo() : '' }
                        <button className='culture__btn' onClick={() => { handleClick('4') }}>EXPERIENCIA</button>
                        {state.experience ? getInfo() : '' }
                        <button className='culture__btn' onClick={() => { handleClick('5') }}>BENEFICIOS PARA EL CLIENTE</button>
                        {state.cliente ? getInfo() : '' }
                    </div>
                    :
                    <>
                        <div className='culture__con-btn'>
                            <button className='culture__btn' onClick={() => { handleClick('1') }}>CULTURA EMPRESARIAL</button>
                            <button className='culture__btn' onClick={() => { handleClick('2') }}>MISIÓN</button>
                            <button className='culture__btn' onClick={() => { handleClick('3') }}>VISIÓN</button>
                            <button className='culture__btn' onClick={() => { handleClick('4') }}>EXPERIENCIA</button>
                            <button className='culture__btn' onClick={() => { handleClick('5') }}>BENEFICIOS PARA EL CLIENTE</button>
                        </div>

                        {getInfo()}

                    </>


                }
            </section>
        </div>
    )
}
