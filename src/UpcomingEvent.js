import React from 'react';
import './App.css';
//import Navigation from './navigation'
import Havana from './/Havana+2020+Instagram.png';
import {Link} from 'react-router-dom';
import Calendar from './2019-20+Calendar+of+Events.png'


function UpcomingEvent(){
    
    return(
        <div className="upcomingclass">
            Upcoming Events/Workshops
            <div className="upcomingclass">
                <Link to="/hanavaEvent" exact={true}>
                <img src={Havana} alt={Havana}/>
                Salsa Night at LB Distillers | Jan 17
                </Link>
            
              </div>
              <div className="calender">
              <img src={Calendar} alt={Calendar}></img>
              </div>
        </div>
    )
}
export default UpcomingEvent;