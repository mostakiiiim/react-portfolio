import React from 'react';
import useAuth from '../../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <button className="btn btn-primary" onClick={signInUsingGoogle}>Google Sign In</button>
        </div>
    );
};

export default Login;