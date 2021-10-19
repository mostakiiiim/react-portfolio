import React from 'react';
import { Link } from 'react-router-dom';

const Department = ({ service }) => {
    const { key, serviceName, serviceDescription, image } =
        service;
    console.log(serviceName);
    return (
        <div className="col-lg-4  col-md-6 single-service p-5 m-5 mx-auto">
            <img src={image} alt="" />
            <h2 className="pt-3">{serviceName.toUpperCase()}</h2>
            <p>{serviceDescription}</p>
            <Link to={`/service/${key}`}>
                <button className="btn btn-info">
                    Read More
                </button>
            </Link>
        </div>
    );
};

export default Department;