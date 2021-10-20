import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    console.log('came from', location.state?.from);
    const auth = getAuth();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })

            .finally(() => setIsLoading(false));
    }
    const toggleLogin = e => {

        setIsLogin((e.target.checked));
    }
    const handleNameChange = e => {
        setUserName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();

        console.log(email, password);
        if (password.length < 6) {
            setError('Password must be atleast 6 characters')
            return;
        }


        if (isLogin) {
            processLogin(email, password);
        }
        else {
            createNewUser(email, password);

        }
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                history.push(redirect_url);

                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)

            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setName();
                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const setName = () => {
        updateProfile(auth.currentUser, { displayName: username })
            .then(result => {
                window.location.reload();
            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {


            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then((result) => {

            })
            .catch(error => {
                setError(error.message);
            })
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

            <button className="btn btn-primary m-5" onClick={handleGoogleLogin}>Google Sign In</button>
        </div>
    );
};

export default Login;