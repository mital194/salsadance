import React from 'react';
import {
    Link 
}from 'react-router-dom';
function Contact(){
    return(
        <div>
            <h1>Contact Form</h1>
            <label>Email:</label>
            <input/>
            <Link to="/about">About</Link>
        </div>
    )
}
export default Contact;