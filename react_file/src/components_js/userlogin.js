import { signOut,  onAuthStateChanged } from "firebase/auth";
import React,{  useState,useEffect } from "react"; 
import { auth }from '../components_js/firebase';
import { useLocation } from "react-router-dom";
import { db } from '../components_js/firebase'

const user_details = document.getElementById("user_details");

const AuthDetails=()=>{
    const location=useLocation();
    const userDetails = location.login.user.id;

     userDetails = (id) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const query = db.collection('users');
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
                                uid_driver.value = `${doc.id}`;
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
                            console.log("No users found with email:");
                        }
                    })
                    .catch(error => {
                        console.error("Error getting documents:", error);
                    });
            }
        });
    }

    // Add this code to retrieve user data after a page refresh
    window.addEventListener('onload', () => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);

            // Populate HTML elements with stored user data
            const uid_driver = document.getElementById("uid_driver");
            uid_driver.value = userData.id;
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
           
        }
    });

    const logout = async () => {
        try {

            window.localStorage.removeItem('userData');
            console.warn("logout successfully");
            alert("logout successfully")
            user_details.style.display = 'none';


        } catch (err) {
            console.error(err);
        }
    };




return(

<div id="user_details">
<h1></h1>
<button onClick={logout}  >Sign Out</button><br/>
{/* <div>
    {authUser?<p>{`signed in as ${authUser.email}`}</p>:<p>signed out</p>}
      </div> */}

   <div className="info">
          <i id="userinfo" className="fa-regular fa-rectangle-xmark"></i>

         <h2>..Account Details..</h2>
         User ID : <input title="User ID" type="text" id="uid_driver" readOnly /><br/>
         Name : <input title="User ID" type="text" id="name_driver" readOnly /><br/>
         Contact Number : <input title="User ID" type="text" id="email_driver" readOnly /><br/>
         Email : <input type="text" title="User ID" id="num_driver" readOnly /><br/>
         Liecence Number : <input title="User ID" type="text" id="liecence_driver" readOnly /><br/>
         Vehicle Number : <input title="User ID" type="text" id="vehiclenum_driver" readOnly /><br/>
         Type of Vehicle : <input title="User ID" type="text" id="vehicletype_driver" readOnly /><br/>
       </div>
</div>
)
}
export default AuthDetails;