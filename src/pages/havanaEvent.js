import React from 'react';
import {Link} from 'react-router-dom';
import Havana from '../Havana+2020+Instagram.png';
function havanaEvent() {
    return (
        <div>
            <h1>Receive information about Upcoming Classes, 
                Events & Workshops from Saskatoon Salsa!</h1>
                <Link to="/hanavaEvent" exact={true} component={havanaEvent}>
                <img src={Havana} alt={Havana}/><br/>
                Salsa Night at LB Distillers | Jan 17
                </Link>
        </div>
    )
}

export default  havanaEvent;