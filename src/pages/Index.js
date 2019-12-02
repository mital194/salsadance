import React from 'react';
import {
    Link
}from 'react-router-dom';
import logo from './images/dancelogo.png';
function Index(){
    return(
        <div>
            <ul>
             <Link to="/Index">Home</Link> 
            </ul> 
            <ul>
             <Link to="/Classes">Classes</Link> 
            </ul> 
            <ul>
            <Link to="/UpcomingEvent">UpcomingEvent</Link>
            </ul> 
            <ul> 
                <img src={logo} alt="not found"/>
            </ul>
            <ul>
            <Link to="/Contact">Contact </Link>
            </ul>
            <ul>
            <Link to="/About">About </Link>
            </ul>
            <ul>
            <Link to="/sign in">Sign In </Link>
            </ul>
        </div>
    )
}
export default Index;