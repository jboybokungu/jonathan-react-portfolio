import React from 'react';
import '../styles/Navbar.css';

function Navbar(props) {
    return (
        <header>
            <h1 className="display-1">JB</h1>

            <ul className="navbar-container">
                <li className="navbar1">
                    <a className="nav-ref" onClick={() => props.setPage('About')} href="#about">About Me</a>
                </li>
                <li className="navbar2">
                    <a className="nav-ref" onClick={() => props.setPage('Portfolio')} href="#portfolio">Projects</a>
                </li>
                <li className="navbar3">
                    <a className="nav-ref" onClick={() => props.setPage('Resume')} href="resume/resume1.pdf">Resume</a>
                </li>
                <li className="navbar3">
                    <a className="nav-ref" onClick={() => props.setPage('Contact')} href="#contact">Contact</a>
                </li>
            </ul>
        </header>
    )
}


export default Navbar;