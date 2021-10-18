import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MoreInfo = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([])
    const [singleService, setSingleService] = useState({})

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
            ;
    }, [])

    useEffect(() => {
        const foundDetails = serviceDetails.find(service => service.key === serviceId);
        setSingleService(foundDetails);
    }, [serviceDetails, serviceId])

    return (
        <div className="container">
            <div className="row m-5 pb-5  d-flex justify-content-center">
                <div className="col-md-6 ">
                    <img className="img-fluid w-50" src={singleService?.image} alt="" />
                </div>
                <div className="col-6 p-4 d-flex  flex-column  justify-content-center justify-content-sm-center w-100 ">
                    <h1>{singleService?.serviceName}</h1>
                    <p>{singleService?.serviceDescription}</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <img className="img-fluid" src={singleService?.docImage} alt="" />
                </div>
                <div className="col-6 d-flex flex-column justify-content-center w-100 pt-5">
                    <h1>{singleService?.docName}</h1>
                    <p>{singleService?.docDescription}</p>
                </div>
            </div>


        </div>
    );
};

export default MoreInfo;