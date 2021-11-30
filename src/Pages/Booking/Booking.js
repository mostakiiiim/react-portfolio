import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://stormy-mountain-39355.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])
    return (
        <div>
            <h1>details of: {service.name}</h1>
            <h1>this is: {serviceId}</h1>
        </div>
    );
};

export default Booking;