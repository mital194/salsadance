import React from 'react';
import './App.css';
//import Navigation from './navigation'
import Havana from './/Havana+2020+Instagram.png';
import {
    Link,
    Route
} from 'react-router-dom';
import Calendar from './2019-20+Calendar+of+Events.png'
import havanaEvent from './pages/havanaEvent';
import Navigation from './pages/navigation'

function UpcomingEvent(){
    
    return(
        <div>
            <Navigation/>
        <div className="upcomingclass">
            Upcoming Events/Workshops
            <div className="upcomingclass">
                <Link to="/havanaEvent" exact={true} >
                <img src={Havana} alt={Havana}/><br/>
                Salsa Night at LB Distillers | Jan 17
                </Link>
                <Route path={'/havanaEvent'} component={havanaEvent} exact={true}/>   
              </div>
              <div className="calender">
              <img src={Calendar} alt={Calendar}></img>
              </div>
        </div>
        </div>
    )
}
export default UpcomingEvent;