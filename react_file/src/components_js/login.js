import React from "react";
import Signup from "./signup";
import '../css_files/login.css'
import { Link } from "react-router-dom";
import { auth } from '../components_js/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { db } from '../components_js/firebase'
import { handleLoginClick } from "./nav";
// import Nav from "./nav";
// import {useNavigate } from "react-router-dom";
import AuthDetails from "./userlogin";

export const Login = () => {
    const loggin = document.getElementById("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authUser, setAuthUser] = useState(null);
    const user_details = document.getElementById("user_details");
    // const details = document.getElementById('user_details');
    ////////////////////////////////////////////////////////////

    const userDetails = (id) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const query = db.collection('users').where('email', '==', email);
                query.get()
                    .then(querySnapshot => {
                        if (!querySnapshot.empty) {
                            querySnapshot.forEach(doc => {
                                // Access Firestore data for each document
                                const userData = doc.data();
                                console.log("User data is:", userData);

                                // Store user data in localStorage
                                localStorage.setItem('userData', JSON.stringify(userData));
                                const uid_driver = document.getElementById("uid_driver");
                                uid_driver.value = `${userData.userID}`;
                                const name_driver = document.getElementById("name_driver");
                                name_driver.value = `${userData.userName}`;
                                const num_driver = document.getElementById("num_driver");
                                num_driver.value = `${userData.ContactNumber}`;
                                const email_driver = document.getElementById("email_driver");
                                email_driver.value = `${doc.data().email}`
                                const liecence_driver = document.getElementById("liecence_driver");
                                liecence_driver.value = `${doc.data().LiecenceNumber}`
                                const vehiclenum_driver = document.getElementById("vehiclenum_driver");
                                vehiclenum_driver.value = `${doc.data().VehicleNumber}`
                                const TypeOfVehicle_driver = document.getElementById("vehicletype_driver");
                                TypeOfVehicle_driver.value = `${doc.data().TypeOfVehicle}`


                            });
                        } else {
                            console.log("No users found with email:", email);
                        }
                    })
                    .catch(error => {
                        console.error("Error getting documents:", error);
                    });
            }
        });
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    document.addEventListener('DOMContentLoaded', () => {
        const storedUserData = localStorage.getItem('userData');
        const user_details = document.getElementById('user_details');
        const loggin = document.getElementById("login");

        if (storedUserData) {
            user_details.style.display = 'block';
            loggin.style.display = 'none';


            const userData = JSON.parse(storedUserData);

            // Populate HTML elements with stored user data
            const uid_driver = document.getElementById("uid_driver");
            uid_driver.value = userData.userID;
            const name_driver = document.getElementById("name_driver");
            name_driver.value = userData.userName;
            const email_driver = document.getElementById("email_driver");
            email_driver.value = userData.email;
            const num_driver = document.getElementById("num_driver");
            num_driver.value = userData.ContactNumber;
            const liecence_driver = document.getElementById("liecence_driver");
            liecence_driver.value = userData.LiecenceNumber;
            const vehiclenum_driver = document.getElementById("vehiclenum_driver");
            vehiclenum_driver.value = userData.VehicleNumber;
            const TypeOfVehicle_driver = document.getElementById("vehicletype_driver");
            TypeOfVehicle_driver.value = userData.TypeOfVehicle;

        } else {
            user_details.style.display = 'none';
            loggin.style.display = 'block';

        }
    });

    // Call userDetails function when logging in
    const Login = (e) => {
        // const history = useNavigate();
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User logged in:", user);

                setEmail("");
                setPassword("");
                userDetails(user.uid);
                user_details.style.display = 'block';
                loggin.style.display = 'none';
                // history('/userlogin'); 

            })
            .catch((error) => {
                console.error("Login error:", error);
            });
    };

    const logout = async () => {
        try {

            window.localStorage.removeItem('userData');
            console.warn("logout successfully");
            alert("logout successfully")
            // user_details.style.display = 'none';
            // loggin.style.display='block';

        } catch (err) {
            console.error(err);
        }
    };





    return (

        <div className="login-signup" id="loggin">
            <h2>Login</h2>
            <form action="" id="login" >
                {/* <button onClick={logout} >Sign Out</button><br/> */}
                <div className="user-box">
                    <input type="Email" id="login-email" required value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="user-box">
                    <input type="password" id="login-pwd" required value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="forgot-pwd">
                    <h6>Forgot Password?</h6></div>

                <div className="btn">
                    <button id="login-submit" type="submit" onClick={Login}>Submit</button>

                </div>


                <div className="new_page"> <h6>Create Account ?<Link to='/signup' id='nav-to-signup'>Click Here</Link></h6></div>


            </form>

            <div id="user_details">
                <div className="a">

                    <button onClick={logout}>Sign Out</button><br />


                    <div className="info">
                        <i id="userinfo" className="fa-regular fa-rectangle-xmark"></i>

                        <h2>..Account Details..</h2>
                        User ID : <input title="User ID" type="text" id="uid_driver" readOnly /><br />
                        Name : <input title="User ID" type="text" id="name_driver" readOnly /><br />
                        Email :  <input title="User ID" type="text" id="email_driver" readOnly /><br />
                        Contact Number :<input type="text" title="User ID" id="num_driver" readOnly /><br />
                        Liecence Number : <input title="User ID" type="text" id="liecence_driver" readOnly /><br />
                        Vehicle Number : <input title="User ID" type="text" id="vehiclenum_driver" readOnly /><br />
                        Type of Vehicle : <input title="User ID" type="text" id="vehicletype_driver" readOnly /><br />
                    </div>
                </div>
            </div>

        </div>

    );
};


