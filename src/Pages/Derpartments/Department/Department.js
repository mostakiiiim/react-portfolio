import React from 'react';
import { Link } from 'react-router-dom';

const Department = ({ service }) => {
    const { _id, name, description, img, price } =
        service;
    console.log(name);
    return (
        <div className="col-lg-4  col-md-6 single-service p-5 m-5 mx-auto">
            <img src={img} alt="" />
            <h2 className="pt-3">{name.toUpperCase()}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <p>{_id}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-info">
                    Read More
                </button>
            </Link>
        </div>
    );
};

export default Department;