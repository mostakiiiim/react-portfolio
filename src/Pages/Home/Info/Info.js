import React from 'react';
import { Link } from 'react-router-dom';
import './Info.css'
const Info = () => {
    return (
        <div className="bg-info text-dark pt-5 pb-5">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 text-start mt-5">
                        <h3 className="border-bottom pb-3"> <i class="far fa-building pe-4"></i>
                            <Link to={"/services"} className="links">Our Department</Link></h3>
                        <h3 className="border-bottom pb-3"><i class="fas fa-calendar-week pe-4"></i><Link to={"/appointment"} className="links">Schedule Appointment</Link></h3>
                        <h3 className="border-bottom pb-3"><i class="fas fa-file-invoice-dollar pe-4"></i><Link to={'/billing'} className="links">Bill Pay</Link></h3>
                    </div>
                    <div className="col-md-6 mt-5">
                        <h3>Your Journey to Whole Health Starts Here</h3>
                        <h1>Take the <span className="fw-bold">First Step</span></h1>
                        <p>Trust the experts and advanced medical treatments at Idyllic Hospital, formerly Florida Hospital Waterman, in Tavares, FL. At AdventHealth Waterman — a Grade-A Safety hospital in Lake County since 2013 — it's our mission to help heal your body, ease your mind, and lift your spirit, while helping more people in the community reach their God-given potential.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;