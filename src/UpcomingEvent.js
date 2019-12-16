import React from 'react';
import './App.css';
//import Navigation from './navigation'
import Havana from './/Havana+2020+Instagram.png';
import { Link} from 'react-router-dom';
import Calendar from './2019-20+Calendar+of+Events.png'


function UpcomingEvent(){
    return(
        <div>
            Upcoming Events/Workshops
            <div className="upcomingclass">
                <img src={Havana} alt={Havana} > </img>
                <Link to="/hanavaEvent" exact={true}/>
                SSDC Havana Dance Excursion 2019
                <img src={Havana} alt={Havana}></img>
                Salsa Night at LB Distillers | Jan 17
                <img src={Havana} alt={Havana}></img>
                Dec 14 | Christmas Boogaloo Show & Party
                <img src={Havana} alt={Havana}></img>
                Ladies Touch Saskatoon Auditions
              </div>
              <div className="calender">
              <img src={Calendar} alt={Havana}></img>
              </div>
        </div>
    )
}
export default UpcomingEvent;