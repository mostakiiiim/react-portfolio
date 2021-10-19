import React, { useEffect, useState } from 'react';
import DoctorAll from '../DoctorAll/DoctorAll';

const DoctorsAll = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setDoctors(data));

    }, [])

    return (
        <div>
            <div className="row">
                <h1 className="text-center fw-bold my-5 py-5">Our <span className="text-info">
                    Doctors</span>
                </h1>
                {
                    doctors.map(doctor =>
                        <DoctorAll
                            key={doctor.key}

                            doctor={doctor}

                        ></DoctorAll>)
                }
            </div>
        </div>
    );
};

export default DoctorsAll;