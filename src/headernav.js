import React from 'react';
import {
    BrowserRouter,
    Route,
    Link
  } from 'react-router-dom';
function headerNav(){
    return(
        <div>
            <BrowserRouter>
        <div className="header">
        <Route path="/" component={Index} exact={true}/>
        <Route path="/Classes"
         component={Classes}
         exact={true}/>
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