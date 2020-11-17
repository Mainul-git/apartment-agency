import React, { useState } from 'react';
import Navbar from '../HomePage/Navbar/Navbar';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import fbLogo from '../../images/fb.png';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [isNewUser, setIsNewUser] = useState(false);

    const [formData, setFormData] = useState();

    const successLogin = (token) => {
        localStorage.setItem("userToken", token);
    }

    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const token = result.credential.accessToken;
                const user = result.user;
                console.log(token, user);
                successLogin(token);
                history.push(from);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                history.push(from);
            });
    }

    const handleFbLogin = () => {
        firebase.auth().signInWithPopup(fbProvider)
            .then(result => {
                const token = result.credential.accessToken;
                const user = result.user;
                console.log(token, user);
                successLogin(token);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const handleBlur = (e) => {
        const newFormData = {...formData};
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const handleLogin = (e) => {
        console.log(formData);
        e.preventDefault();
    }

    const handleSignup = (e) => {
        console.log(formData);
        e.preventDefault();
    }

    return (
        <div>
            <Navbar />
            <div className="login-container">
                {isNewUser ? <h1>Create an account</h1> : <h1>Login</h1>}
                <br />
                <form>
                    {isNewUser && <div className="form-group">
                        <input onBlur={handleBlur} name="firstName" type="text" className="form-control" placeholder="First Name" required />
                    </div>}

                    {isNewUser && <div className="form-group">
                        <input onBlur={handleBlur} name="lastName" type="text" className="form-control" placeholder="Last Name" required />
                    </div>}

                    <div className="form-group">
                        <input onBlur={handleBlur} name="email" type="email" className="form-control" placeholder="Email" required />
                    </div>

                    <div className="form-group">
                        <input onBlur={handleBlur} name="password" type="password" className="form-control" placeholder="Password" required />
                    </div>

                    {isNewUser && <div className="form-group">
                        <input onBlur={handleBlur} name="confirmPassword" type="password" className="form-control" placeholder="Confirm Password" required />
                    </div>}

                    {isNewUser ? <button onClick={handleSignup} type="submit" style={{ width: '100%' }} className="custom-btn">Sign Up</button>
                        : <button onClick={handleLogin} type="submit" style={{ width: '100%' }} className="custom-btn">Login</button>}
                </form>
                <br />
                {isNewUser ? <p>Already have an account? <b onClick={() => setIsNewUser(!isNewUser)} style={{ cursor: 'pointer', color: '#275A53' }}>Login here</b></p>
                    : <p>Don't have an account? <b onClick={() => setIsNewUser(!isNewUser)} style={{ cursor: 'pointer', color: '#275A53' }}>Register here</b></p>}

            </div>

            <br />
            <div className="d-flex justify-content-center">
                <button className="login-btn text-left" onClick={handleGoogleLogin}>
                    <img width="30px" src="https://img.icons8.com/color/48/000000/google-logo.png" />
                    <b className="pr-5">Continue with Google</b>
                </button><br />
            </div>

            <div className="d-flex justify-content-center">
                <button className="login-btn text-left" onClick={handleFbLogin}>
                    <img width="30px" src={fbLogo} />
                    <b className="pr-5">Continue with Facebook</b>
                </button>
            </div>
        </div>
    );
};

export default Login;
