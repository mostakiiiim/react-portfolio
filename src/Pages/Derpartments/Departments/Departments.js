import React, { useEffect, useState } from 'react';
import Department from '../Department/Department';

const Departments = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://stormy-mountain-39355.herokuapp.com/services')
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
                            key={service._id}
                            service={service}

                        ></Department>)
                }
            </div>
        </div>
    );
};

export default Departments;