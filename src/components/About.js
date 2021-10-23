import React from "react";
import '../styles/About.css';
import Profile from '../images/profile.jpg';


function About () {
    return (
        <div>
        <div className="text-center">
        <img src={Profile} class="profile-pic" alt="profile"/>
        </div>

        <div className="text-center">
            <p>Hello
                <br />
                My name is Jonathan Bokungu, I am a graduate of the University of North Carolina at Charlotte with a degree in Mathematics 
                and a minor in Actuarial Mathematics. I am an enthusiastic individual eager to contribute to team sucess through hard work,
                attention to detail and excellent organizational skills. I am motivated to learn, grow and excel in any industry.
                I am also a full stack coding bootcamp student, and I am ready to apply what I have learned to the real world.
            </p>
        </div>
        </div>
    );
}
export default About;
