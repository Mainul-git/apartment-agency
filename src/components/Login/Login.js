import React from 'react';
import Navbar from '../HomePage/Navbar/Navbar';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

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
            .then( result => {
                const token = result.credential.accessToken;
                const user = result.user;
                console.log(token, user);
                successLogin(token);
            })
            .catch( error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div>
            <Navbar />
            <div className="login-container">
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <button onClick={handleGoogleLogin}>Continue with Google</button>
                <button onClick={handleFbLogin}>Continue with Facebook</button>
            </div>
        </div>
    );
};

export default Login;
