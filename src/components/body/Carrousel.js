import React from 'react'
import body from '../../img/body.png';
import dron from '../../img/dron.png';
import mina from '../../img/mina.png';



export const Carrousel = () => {
    return (
        
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active carrusel__container">
                        <img src={body} className=" carrusel__img " alt="img"/>
                    </div>
                    <div className="carousel-item carrusel__container">
                        <img src={dron} className=" carrusel__img" alt="img"/>
                    </div>
                    <div className="carousel-item carrusel__container">
                        <img src={mina} className=" carrusel__img" alt="img"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        
    )
}
