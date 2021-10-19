import React from 'react';

const Appointment = () => {
    return (
        <div>
            <div className="container mb-5">
                <h1 className="m-5">Appoint Now</h1>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <img className="img-fluid w-100" src="https://image.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg" alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputText1" className="form-label">Username</label>
                                <input type="text" className="form-control" id="inputText1" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">Department</label>
                                <select id="inputState" className="form-select">
                                    <option defaultValue>Choose department...</option>
                                    <option>Anesthesiologist</option>
                                    <option>Dermatologist</option>
                                    <option>Cardiologist</option>
                                    <option>Neurologist</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label htmlFor="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <label htmlFor="floatingPassword">Date</label>
                                    <input type="date" className="form-control" id="floatingPassword" placeholder="Password" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        I agree to the terms and conditions
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Book Appointment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;