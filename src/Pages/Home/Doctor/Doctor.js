import React from 'react';
import './Doctor.css'
const Doctor = ({ doctor }) => {
    const { docName, speciality, docDescription, docImage } = doctor;
    return (
        <div className="col-lg-6 col-md-6  single-doctor p-5 m-5 mx-auto ">
            <img className="w-100" src={docImage} alt="" />
            <div className="row pt-3" >
                <div className="col-6">

                </div>
                <div className="col-6 text-end">

                    <p className="text-muted ">{speciality}</p>
                    <h3>{docName}</h3>
                </div>
            </div>


        </div>
    );
};

export default Doctor;