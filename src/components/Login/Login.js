import React, { useState } from 'react';
import Navbar from '../HomePage/Navbar/Navbar';
import './Login.css';
import firebase from "firebase/app";
import { useHistory, useLocation } from 'react-router-dom';
import fbLogo from '../../images/fb.png';
import { firebaseConfig } from './firebase.config';
// import * as firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);
const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [isNewUser, setIsNewUser] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const adminVerify = (email, displayName) => {
        fetch(`https://still-eyrie-70695.herokuapp.com/findAdmin?email=${email}`)
            .then(response => response.json())
            .then(data => {
                if (data[0]) {
                    localStorage.setItem('name', displayName)
                    localStorage.setItem('email', email)
                    localStorage.setItem('admin', 'true')
                    history.push(from)


                }

                else {
                    localStorage.setItem('name', displayName)
                    localStorage.setItem('email', email)
                    localStorage.setItem('admin', 'false')
                    history.push(from)

                }

            }
            )
    }
    console.log(formData)
    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                console.log(result)
                const { email, displayName, photoURL } = result.user;
                adminVerify(email, displayName)

            })


            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }

    const handleFbLogin = () => {
        firebase.auth().signInWithPopup(fbProvider)
            .then(result => {
                console.log(result)
                const { email, displayName, photoURL } = result.user;
                adminVerify(email, displayName)
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    let passwordCheck = false;
    const password1 = formData.password;
    const password2 = formData.confirmPassword;
    if (isNewUser && password2 !== '' && password1 !== password2) {
        passwordCheck = 'password does not match';
    }

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(event.target.value);
            isFieldValid = isEmailValid
            console.log(isEmailValid)
        }
        if (event.target.name === 'password') {
            let isPasswordValid = event.target.value.length > 8;
            let passwordHasNumber = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(event.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }

        if (isFieldValid) {
            const newUserInfo = { ...formData }
            newUserInfo[event.target.name] = event.target.value;
            setFormData(newUserInfo);
        }

    }
    const handleSignup = () => {
        if (formData.email && formData.confirmPassword) {
            const password = formData.confirmPassword;
            const email = formData.email;
            const displayName = `${formData.firstName} ${formData.lastName}`
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(res => {
                    adminVerify(email, displayName)
                })
                .catch(error => {
                    const newUser = { ...formData }
                    newUser.error = error.message;
                    newUser.success = false;
                    setFormData(newUser);

                });
        }
        console.log('sign up check')
    }


    const handleLogin =()=>{
        if (formData.email && formData.password) {
            const password = formData.password;
            const email = formData.email;
            const displayName = `${formData.firstName} ${formData.lastName}`
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
                    adminVerify(email, displayName)
                })
                .catch(error => {
                    const newUser = { ...formData }
                    newUser.error = error.message;
                    newUser.success = false;
                    setFormData(newUser);

                });

        }
        console.log('sign in check')
     
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

                        {
                            (isNewUser && formData.email !== '' && formData.password === '') && <small className="form-text text-muted" >password should have more than 8 character uppercase lower case with numeric numbers</small>
                        }
                        <div className="form-group">
                            <input onBlur={handleBlur} name="password" type="password" className="form-control" placeholder="Password" required />
                        </div>

                        {isNewUser && <div className="form-group">
                            <input onBlur={handleBlur} name="confirmPassword" type="password" className="form-control" placeholder="Confirm Password" required />
                            {
                                passwordCheck && <small style={{ color: 'red' }} className="form-text">{passwordCheck}</small>
                            }
                        </div>}

                        {isNewUser ? <button  onClick={handleSignup} type="submit" style={{ width: '100%' }} className="custom-btn">Sign Up</button>
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
