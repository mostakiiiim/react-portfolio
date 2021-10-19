import React from 'react';
import './Banner.css'
import docBanner from '../../../Images/doctor.png';
const Banner = () => {
    return (
        <div >

            <div className="banner-content">
                <div className="row">
                    <div className="col-md-6 col-12 d-flex justify-content-center align-items-center ">
                        <h1> Healthcare that is <br /> <span className="fw-bold">CONVENIENT</span> <br /> &
                            <br /> <span className="fw-bold bg-">AFFORDABLE</span> </h1>
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