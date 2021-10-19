import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setDoctors(data));

    }, [])
    return (
        <div className="container">
            <h1 className="text-center fw-bold my-5 py-5">Our <span className="text-info">
                Doctors</span>
            </h1>
            <div className="row">
                {
                    doctors.slice(0, 4).map(doctor =>
                        <Doctor
                            key={doctor.key}

                            doctor={doctor}

                        ></Doctor>)
                }
            </div>
            <Link to={'/doctors'} className="visit fs-4 text-dark border border-secondary p-3">
                See All Doctors
            </Link>
        </div>
    );
};

export default Doctors;