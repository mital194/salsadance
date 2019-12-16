import React from 'react';
import {
    BrowserRouter,
    Route,
    Link
}from 'react-router-dom';
import logo from '../dancelogo.png';

function navigation(){
    return(
        <div className="header">
        <BrowserRouter>
            <Route>
             <Link to="/navigation">Home</Link>
             <Link to="/Classes">Classes</Link> 
             <Link to="/UpcomingEvent">UpcomingEvent</Link>
             <img src={logo} alt="not found"/>
             <Link to="/Contact">Contact </Link>
             <Link to="/About">About </Link>
             <Link to="/Gallery">Gallery </Link>
            </Route>
       
        </BrowserRouter>
        </div>
    )
}
export default navigation;