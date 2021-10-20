import React, { useEffect, useState } from 'react';
import Department from '../Department/Department';

const Departments = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container">
            <h1 className="text-center fw-bold my-5 py-5">Our <span className="text-info">
                All Services</span>
            </h1>
            <div className="row mb-5">
                {
                    services.map(service =>
                        <Department
                            key={service.key}
                            service={service}

                        ></Department>)
                }
            </div>
        </div>
    );
};

export default Departments;