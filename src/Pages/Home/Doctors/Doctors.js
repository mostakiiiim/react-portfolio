import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setDoctors(data));

    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    doctors.slice(0, 4).map(doctor =>
                        <Doctor
                            key={doctor.key}

                            doctor={doctor}

                        ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;