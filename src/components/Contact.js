import React from "react";
import "../styles/Contact.css";



function Contact() {
    return (
        <div className="text-center">
        <h2>Contact Me</h2>
        <form id='form' className="container col-3 text-white text-center pt-5">
        <div class="mb-3">
            <h6>Please, fill out this form.</h6><br></br>
            <input type="text" className='form-control' placeholder='Enter Your Name'/>
        </div>
        <div className="mb-3">
            <input type="email" class="form-control" placeholder='Enter Your Email Address' />
        </div>
        <div className="mb-3">
            <textarea type="text" class="form-control" placeholder='Please enter a short message here' rows='3'/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
        </div>
    );
}

export default Contact;