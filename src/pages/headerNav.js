import React from 'react';
import {
    BrowserRouter,
    Route,
  } from 'react-router-dom';
  import Index from './pages/Index.js';
import Contact from './pages/Contact.js';
import About from './pages/about.js'
import UpcomingEvent from './pages/UpcomingEvent.js';
import Classes from './pages/Classes.js';
import SignIn from './pages/SignIn.js';

function headerNav(){
    return(
        <div>
            <BrowserRouter>
                <div className="header">
                <Route path="/" component={Index} exact={true}/>
                <Route path="/Classes" component={Classes} exact={true}/>
                <Route path="/UpcomingEvent" component={UpcomingEvent} exact={true}/>
                <Route path="/about" component={About} exact={true}/>
                <Route path="/contact" component={Contact} exact={true}/>
                <Route path="/signIn" component={SignIn} exact={true}/>
                </div>
        </BrowserRouter>
        </div>
    )
}
export default headerNav;