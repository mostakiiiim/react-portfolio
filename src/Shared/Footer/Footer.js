import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark">
                <div className="bg-dark container">
                    <div className="row text-white pt-5">
                        <div className="col-md-4 ">
                            <h1 className="border-bottom"><i className="far fa-hospital pe-4"></i>Idyllic Hospital</h1>
                            <p className="text-muted">
                                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare
                            </p>
                            <i className="fab fa-facebook p-4 fs-2"> facebook</i>
                            <i className="fab fa-twitter p-4 fs-2"> Twitter</i>
                            <i className="fab fa-linkedin p-4 fs-2"> LinkeDin</i>
                        </div>
                        <div className="col-md-4">
                            <h1 className="border-bottom"> <i className="far fa-building pe-1"></i> Our Departments</h1>
                            <div className="text-muted">
                                <p >Anesthesiology</p>
                                <p>Dermatology</p>
                                <p>Surgery</p>
                                <p>Neurology</p>
                                <p>Cardiology</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h1 className="border-bottom"><i className="fas fa-phone-square-alt pe-4"></i>Contact Us</h1>
                            <div className="text-muted">
                                <h4>Nicosia, Cyprus</h4>
                                <p>145 Keryneias Avenue</p>
                                <p>Office 25</p>
                                <p>CY-2113 Aglantzia</p>
                                <p>Nicosia, Cyprus</p>

                                <p>Phone: +357-22 041930</p>
                                <p> Fax: +357-22 250073</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;