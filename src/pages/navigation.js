import React from 'react';
import {
    BrowserRouter,
    Link
}from 'react-router-dom';
import logo from '../dancelogo.png';

function navigation(){
    return(
        <div className="header">
        <BrowserRouter>
             <Link to="/">Home</Link>
             <Link to="/Classes">Classes</Link> 
             <Link to="/UpcomingEvent">UpcomingEvent</Link>
             <img src={logo} alt="not found"/>
             <Link to="/Contact">Contact </Link>
             <Link to="/About">About </Link>
             <Link to="/Gallery">Gallery </Link>
       
        </BrowserRouter>
        </div>
    )
}
export default navigation;