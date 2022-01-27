import React from 'react';

import banner5 from '../../images/photogallery (12).jpg'
import banner6 from '../../images/photogallery (13).jpg'
import banner3 from '../../images/photogallery (4).jpg'

import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={banner5} className="d-block w-100 img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banner6} className="d-block w-100 img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banner3} className="d-block w-100 img-fluid" alt="..." />
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>
    );
};

export default Banner;