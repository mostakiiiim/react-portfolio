import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";

import { useState, useEffect } from 'react';
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();




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
            setError('Password must be atleast 6 charactes')
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
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then((result) => {

            })
    }



    // ---------------------------------------------------

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false));



    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },
        // eslint-disable-next-line 
        [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        isLoading,
        signInUsingGoogle,
        toggleLogin,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        processLogin,
        createNewUser,
        setName,
        verifyEmail,
        error,
        handleResetPassword,
        logOut
    }
}

export default useFirebase;