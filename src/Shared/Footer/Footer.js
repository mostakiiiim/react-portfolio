import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark">
                <div className="bg-dark container">
                    <div className="row text-white">
                        <div className="col-md-4 ">
                            <h1 className="border-bottom">Idyllic Hospital</h1>
                            <p className="text-muted">
                                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare
                            </p>

                        </div>
                        <div className="col-md-4">
                            <h1 className="border-bottom">Our Departments</h1>
                            <div className="text-muted">
                                <p >Anesthesiology</p>
                                <p>Dermatology</p>
                                <p>Surgery</p>
                                <p>Neurology</p>
                                <p>Cardiology</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h1 className="border-bottom">Contact Us</h1>
                            <div className="text-muted">
                                <p>1095 Meadow View Drive</p>
                                <p>Wethersfield</p>
                                <p>USA</p>
                                <p>Phone: 860-529-7946</p>
                                <p>Email:hospital@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;