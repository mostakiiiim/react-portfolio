import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div >

            <div className="banner-content ">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center ">
                        <h1> Healthcare that is <br /> <span className="fw-bold">CONVENIENT</span> <br /> &
                            <br /> <span className="fw-bold bg-">AFFORDABLE</span>
                            <p><i className="fas fa-hand-holding-medical fa-3x pt-3"></i></p> </h1>
                    </div>
                    <div className="col-md-6 col-12">
                        <img src={docBanner} alt="" className="img-fluid w-50" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;