import React from "react";
import '../css_files/signup.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import  {db} from '../components_js/firebase'
import Login from '../components_js/login'
import { auth }from '../components_js/firebase'
// import firebase from "firebase/compat";
import '../css_files/login.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
// const details = document.querySelector('.user-details');
// const loggin = document.getElementById('loggin');


const Signup =()=>{
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [userid, setuserid]=useState("");
    // setuserid("actual_user_id");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [VehicleNumber, setVehicleNumber] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [LiecenceNumber, setLiecenceNumber] = useState("");
    const [TypeOfVehicle, setTypeOfVehicle] = useState("");


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Create a new user with email and password
        const authUser = await createUserWithEmailAndPassword(auth, email, password);
        // alert("Authentication is created");
                  setuserid("");
                  setUserName("");
                  setEmail("");
                  setPassword("");
                  setContactNumber("");
                  setLiecenceNumber("");
                  setVehicleNumber("");
                  setTypeOfVehicle("");
            
                  alert('Account submitted');
                 
        // Get the user's ID from the authentication result
        const userId = authUser.user.uid;
          console.log(userId);

        // Add user data to the database
        await db.collection('users').doc(userId).set({
            userID: userId,
            userName: userName,
            email: email,
            password:password,
            ContactNumber: ContactNumber,
            LiecenceNumber: LiecenceNumber,
            VehicleNumber: VehicleNumber,
            TypeOfVehicle: TypeOfVehicle
        });

        // Set the signup success state
        setSignupSuccess(true);
    } catch (error) {
        console.error("Error creating user:", error);
    }
};
   
    return(
        

    <div className="login-signup1" id="signup">
    <h2>Signup</h2>
    <form action="" id="signup" onSubmit={handleSubmit}>
                <i id="signup_close"className="fa-regular fa-rectangle-xmark"></i>
                    <div className="user-box">
                    <input type="text" id="signup-username" value={userName}autoComplete="off"required placeholder="Username"onChange={(e)=>setUserName(e.target.value)}/>
                </div>
               
                <div className="user-box">
                    <input type="email" value={email} id="signup-email" autoComplete="off" required placeholder="Email"onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
               
                <div className="user-box">
                    <input type="password" value={password}  id="signup-pwd"autoComplete="off" required placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                
                <div className="user-box">
                    <input type="num" value={ContactNumber}  id="signup-num" autoComplete="off"required placeholder="Contact Number"onChange={(e)=>setContactNumber(e.target.value)}/>
                    </div>
               
                <div className="user-box">
                    <input type="text" value={LiecenceNumber} id="signup-liecence" autoComplete="off" required placeholder="Liecence Number"onChange={(e)=>setLiecenceNumber(e.target.value)}/>
                  </div>
            
                <div className="user-box">
                    <input type="text"value={VehicleNumber}  id="signup-vehiclenum" autoComplete="off" required placeholder="Vehicle Number"onChange={(e)=>setVehicleNumber(e.target.value)}/>
                </div>
                
                <div className="user-box5">
                   
                    <select title="vehiclehave" value={TypeOfVehicle}  id="signup-vehiclehave"autoComplete="off" onChange={(e)=>setTypeOfVehicle(e.target.value)}>
                        <option value="">choose..</option>
                        <option value="2 wheel Bike">2 wheel Bike</option>
                        <option value="3 wheel Auto(passenger)">3 wheel Auto(passenger)</option>
                        <option value="3 wheel Auto(Cargo)">3 wheel Auto(Cargo) </option>
                        <option value="4 wheel 5foot">4 wheel 5foot</option>
                        <option value="4 wheel 9feet">4 wheel 9feet</option>
                        <option value="4 wheel 12 feet">4 wheel 12 feet</option>
                        <option value="6 wheel Truck">6 wheel Truck</option>
                        <option value="Tipper">Tipper</option>
                        <option value="Tractor">Tractor</option>
                        <option value="Auto">Auto</option>
                        <option value="car">car</option>
                        <option value="Traveller">Traveller</option>
                        <option value="tiller">Tiller</option>
                        <option value="minihitachi">Minihitachi</option>
                        <option value="JCB">JCB</option>   
                    </select><br/>
             
                </div>
                            <div className="btn">
                                <button id="signup_submit" type="submit">Submit</button>
                                <div className="loader"></div>
                            </div>
                        
            
    
      <div className="new_page"><h6>Have Account ?  <Link to='/login' id="nav-to-login">Click Here</Link></h6></div>
   </form>
</div>

    )
}
export default Signup;