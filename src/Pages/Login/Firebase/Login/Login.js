import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, handleRegistration, handleEmailChange, handleNameChange, handlePasswordChange, handleResetPassword, error } = useAuth();
    const [isLogin, setIsLogin] = useState(false);
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    return (

        <div>
            <div className="container border border-dark mt-5 mb-5 p-4 border-2 bg-secondary fw-bold">
                <div className="mx-5 mt-5">
                    <form onSubmit={handleRegistration}>

                        <h3 className="text-dark fs-1 pb-2"> {isLogin ? 'Login' : 'Register'}</h3>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        {!isLogin && <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input onBlur={handleNameChange} type="text" className="form-control" required />
                            </div>
                        </div>}
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2 col-md-6">
                                <div className="form-check">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3 text-danger">
                            {error}
                        </div>
                        <button type="submit" className="btn btn-warning mb-4">{isLogin ? 'Sign In' : 'Register'}</button> <br />
                        <button onClick={handleResetPassword} type="submit" className="btn btn-primary">Forgot Password</button>
                    </form>

                </div>
            </div>

            <button className="btn btn-primary m-5" onClick={signInUsingGoogle}>Google Sign In</button>
        </div>
    );
};

export default Login;