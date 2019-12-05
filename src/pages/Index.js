import React from 'react';
import {
    Link
}from 'react-router-dom';
import logo from '../dancelogo.png';
function Index(){
    return(
        <div>
            
             <Link to="/Index">Home</Link> 
           
             <Link to="/Classes">Classes</Link> 
           
            <Link to="/UpcomingEvent">UpcomingEvent</Link>
           
                <img src={logo} alt="not found"/>
            
            <Link to="/Contact">Contact </Link>
           
            <Link to="/About">About </Link>
            
            <Link to="/sign in">Sign In </Link>
    
        </div>
    )
}
export default Index;