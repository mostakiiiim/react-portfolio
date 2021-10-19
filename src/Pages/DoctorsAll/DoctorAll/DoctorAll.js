import React from 'react';

const DoctorAll = ({ doctor }) => {
    const { docName, speciality, docDescription, docImage } = doctor;
    return (
        <div className="col-lg-6 col-md-6  single-doctor p-5 m-5 mx-auto ">
            <img className="w-100" src={docImage} alt="" />
            <div className="row pt-3" >
                <div className="col-12">
                    <p>{docDescription}</p>
                </div>
                <div className="col-12 text-end">

                    <h3>{docName}</h3>
                    <p className="text-muted ">{speciality}</p>
                </div>
            </div>


        </div>
    );
};

export default DoctorAll;