import React from "react";
import { Link } from "react-router-dom";
import '../css_files/nav.css'
const Nav=()=>{
    return(
    <div className="navbar">
        <div className="name">
        <h1>MOVERS</h1>
        <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/login' >Login </Link></li>
           <li><Link to='/contact'>Contact us </Link></li>

        </ul>
        </div>
        </div>
        )
}
export default Nav;
