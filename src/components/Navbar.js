import React from 'react';
import '../styles/Navbar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
        <u1 className = "navbar-container">
            <li className="navbar1">
                <a className="nav-ref" href="#about">About Me</a>
            </li>
            <li className="navbar2">
                <a className="nav-ref" href="#portfolio">Portfolio</a>
            </li>
            <li className="navbar3">
                <a className="nav-ref" href="#resume">Resume</a>
            </li>
            <li className="navbar3">
                <a className="nav-ref" href="#contact">Contact</a>
            </li>
         </u1>
    )
}


export default Navbar; 