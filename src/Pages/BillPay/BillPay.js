import React from 'react';

const BillPay = () => {
    return (
        <div >
            <div className="bg-info p-5">
                <h1>Bill Pay</h1>
            </div>
            <div className="row">
                <div className="col-md-6 p-5">
                    <img className="img-fluid" src="https://image.freepik.com/free-photo/african-american-man-paying-with-credit-card-online-while-making-orders-via-mobile-internet-making-transaction-using-mobile-bank-application_231208-743.jpg" alt="" />
                </div>
                <div className="col-md-6 p-5">
                    <h1 className="mt-5"> Pay Your Bill <span className="fw-bold">Online</span></h1>
                    <p className="text-muted">The Simplee online bill payment system makes it simple to pay your hospital, imaging, urgent care or physician bill. Have the Access Code located on your bill ready when you begin.</p>
                    <button className="btn btn-primary">View and Pay My Bill</button>
                </div>
            </div>
        </div>
    );
};

export default BillPay;