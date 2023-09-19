// import React, { useEffect } from "react";
import React, { useEffect, useState } from "react";
import '../css_files/home.css'

const Home =()=>{
    const [selectedPanel, setSelectedPanel] = useState(0);
    const [color, setColor] = useState("#9966cc");
 const droping_point=document.getElementById("droping_point");
 const pickup_point =document.getElementById("pickup_point");
 const materials=document.getElementById("materials");
 

    const buttonColors = ["#9966cc", "#cccc00", "#66cc00"];
    const showpanel = (panelIndex, Colorcode) => {
      setSelectedPanel(panelIndex);
      setColor(Colorcode);

 
      console.log(`showpanel called with panelIndex: ${panelIndex}, Colorcode: ${Colorcode}`);
    };
    useEffect(() => {
        // JavaScript logic here
        var tabbuttons = document.querySelectorAll(".tabcontainer .buttoncontainer button");
        var tabpanels = document.querySelectorAll(".tabcontainer .tabpanel");
        console.log(tabbuttons);
        console.log(tabpanels);
    
        function showpanel(panelIndex, Colorcode) {
          tabbuttons.forEach(function (node) {
            node.style.backgroundColor = "";
            node.style.color = "";
          });
          tabbuttons[panelIndex].style.backgroundColor = Colorcode;
          tabbuttons[panelIndex].style.color = "white";
          tabpanels.forEach(function (node) {
            node.style.display = "none";
          });
          tabpanels[panelIndex].style.display = "block";
          tabpanels[panelIndex].style.backgroundColor = Colorcode;
          console.log(panelIndex);
          if(panelIndex===0){
            // droping_point.style.display="inline-block";
            // pickup_point.style.display="inline-block";
            // materials.style.display="inline-block";
          }
          if(panelIndex===1){
            materials.style.display="none";
            droping_point.style.display="inline-block";
            pickup_point.style.display="inline-block";
            
          }
          if(panelIndex===2){
            droping_point.style.display="none";
            materials.style.display="none";


          }
              
        }
    
        showpanel(selectedPanel,color);

        
const buttons = document.querySelectorAll(".select");

buttons.forEach(button => {
   button.addEventListener("click", () => {
    // Remove "selected" class from all buttons
    buttons.forEach(btn => {
      btn.classList.remove("selected");
    });

//     // Add "selected" class to the clicked button
    button.classList.add("selected");
    console.log("buttomnnjnj"+button);
// const selectedValue1 = parseInt(button.getAttribute("data-value"));

    // })



// const selectedValue=selectedValue1;
const selectedValue = parseInt(button.getAttribute("data-value"));
console.log("xxxxx"+selectedValue);
   
    // Define variables for different prices
    const prices = {
      1: 8,
      2: 10,
      3: 13,
      4: 17,
      5: 20,
      6: 30,
      8: 20,
      9: 7,
      10: 10,
      11: 12,
      12: 18,
    };
  
    // Use the selected value to get the price from the 'prices' object
    const price = prices[selectedValue];
     
    var km1 = document.getElementById("km1").value;
    console.log(km1);
    console.log("selected vehicle price is "+price);
    function myFunction12(){
    
      var selectedValueElement =prices[selectedValue]; 
      var km1 = document.getElementById("km1").value;

     let x1=(selectedValueElement*2) * km1;
      document.getElementById("priceleft").value=x1;
      console.log(x1);
      return x1;
    };
    myFunction12();                                     //total amount have to pay (customer side)
   
    // Use the selected value as needed
    var text = document.getElementById("kmprice");
    text.textContent = "Per KM Price : " + prices[selectedValue] + " RS";
 /////////////////////////////////////////////////////////////////

})})

}, [selectedPanel,color]);

    return(

    <div>
  
                    <div className="tabcontainer">
                                    <div className="buttoncontainer">
                                    <button onClick={() => showpanel(0, buttonColors[0])}>Cargo Vehicles</button>
                                    <button onClick={() => showpanel(1,buttonColors[1])}>Passenger</button>
                                    <button onClick={() => showpanel(2, buttonColors[2])}>Agriculture</button>
                                    </div>
                                    <div class="tabpanel">
                                        <button data-value="1" id="auto" class="select">3 Wheel Auto</button>
                                        <button data-value="2"id="tempo1" class="select">4 wheel 5 feet</button>
                                        <button data-value="3"id="tempo2" class="select">4 wheel 9 feet</button>
                                        <button data-value="4"id="tempo3" class="select">4 wheel 12 feet</button>
                                        <button data-value="5"id="tempo4" class="select">6 wheel Truck</button>
                                        <button data-value="6"id="Tipper" class="select" value="Tipper">Tipper</button>
                                        <button data-value="8"id="Tractor" class="select">Tractor</button>
                                    </div>
                                    <div class="tabpanel">                 
                                        <button data-value="9"id="bike" class="select">Bike</button>
                                        <button data-value="10"id="Auto" class="select">Auto</button>
                                        <button data-value="11"id="car" class="select" >Car</button>
                                        <button data-value="12"id="Traveller" class="select">Traveller</button>
                                    </div>
                                    <div class="tabpanel">
                                        <button data-value="13"id="Tiller" class="select">Tiller</button>
                                        <button data-value="14"id="hitachi" class="select">Mini Hitachi</button>
                                        <button data-value="15"id="jcb" class="select">JCB</button>
                                        <button data-value="16"id="Tractor" class="select">Tractor</button>
                                        </div>

                                        <span className="search"><input id="pickup_point"type="text" placeholder="Enter Pick-Up Place"/><input id="droping_point" type="text" placeholder="Enter Droping Place"/><input id="materials"type="text" placeholder="Type of Material"/></span>
            
                                        <div className="map">
                                        <iframe
                                           title="googlemap"
                                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30885.238283238938!2d74.81706285468401!3d14.618731045643887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbea8d7fcd0f39b%3A0x83f28aeb1f2b1502!2sSirsi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1690789630399!5m2!1sen!2sin"
                                           width="930"
                                           height="400"
                                           style={{
                                             border: "0",
                                           }}
                                           allowfullscreen=""
                                           loading="lazy"
                                           referrerpolicy="no-referrer-when-downgrade"
                                           ></iframe>
                                           
                                        </div>

                                        <div className="order_details"> 
                                            <h2>Order Details</h2><br/>
                                            <b id="kmprice"></b><br/>
                                          
                                            <input onload="myFunction12()" id="km1"className="inputs"type="Num"placeholder="Total KM is"/><br/>
                                            <input id="priceleft"className="inputs"type="Number" placeholder="Total Price is"/><br/>
                                            <input id="username"className="inputs"type="text" placeholder="Your name" required/><br/>
                                            <input id="usermobile"className="inputs"type="text" placeholder="Contact Number"required/><br/>
                                            <button id="otpgenerate" className="otp"type="button" onclick="otpgenerate()">OTP</button><br/>
                                            <input type="text" name="" id=""className="inputs"placeholder="Enter OTP"/><br/>
                                            <button class="orderconfirm" type="submit"onclick="orderconfirm()">Confirm</button><br/>
                                            <span className="label" ><span>Total KM</span><br/><span>Total Price</span></span>


                                        </div>
                        


                    </div>

                                 <div id="customer"className="to_customer">
                                     <i id="c_close"class="fa-regular fa-rectangle-xmark"></i><br/>
                                <label  id="c_label">Order Confirmed</label> <br/>
                                <label id="ga" >Pickup-Point :<span id="c_pickup"/></label><label id="ga">Destination-Point :<span id="c_Drop"/></label><br/>
                                <label id="c_details">Vehicle Details</label><br/>
                                <label id="c_v1">Vehicle Type :<span id="c_vehicle"/></label><br/>
                                <label id="c_v1" >Vehicle Number :<span id="c_Vnum"/></label><br/>
                                <label id="c_v1" >Driver Name :<span id="c_Dname"/></label><br/>
                                <label id="c_v1" >Contact Number:<span id="c_Dnumber"/></label><br/>
                                <label id="c_v1">Total KM :<span id="c_km"></span></label><br/>
                                <label id="c_v1">Total Amount :<span id="c_Price"></span></label><br/>
                                <label id="lab"><h1>Happy Journey</h1></label>
                                 </div>


        
        
    </div>

        
        )
}
export default Home;