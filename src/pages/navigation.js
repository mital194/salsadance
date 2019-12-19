import React from 'react';
import {
    Link
}from 'react-router-dom';
import logo from '../dancelogo.png';

function navigation(){
    return(
        <div className="header">
        
             <Link to="/">Home</Link>
             <Link to="/Classes">Classes</Link> 
             <Link to="/UpcomingEvent">UpcomingEvent</Link>
             <Link to="/Gallery">Gallery </Link>
             <img src={logo} alt="not found"/>
             <Link to="/Contact">Contact </Link>
             <Link to="/About">About </Link>
            <Link to="/Instructors">Instructors</Link>
            
        </div>
    )
}
export default navigation;