import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Index from './pages/Index.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import UpcomingEvent from './pages/UpcomingEvent.js';
import Classes from './pages/Classes.js';
import SignIn from './pages/SignIn.js';
import h1 from './images/h1.jpg';
import footer from './pages/footer.js';
import ImageSlider from './ImageSlider.js'
function App() {
  return (
    <BrowserRouter>
      <div className="menu">
        <ul>
        <Route path="/" component={Index} exact={true}/>
        </ul>
        <ul>
        <Route path="/Classes" component={Classes} exact={true}/>
        </ul>
        <ul>
        <Route path="/UpcomingEvent" component={UpcomingEvent} exact={true}/>
        </ul>
        <ul>
        <Route path="/about" component={About} exact={true}/>
        </ul>
        <ul> 
        <Route path="/contact" component={Contact} exact={true}/>
        </ul>
        <ul> 
        <Route path="/signIn" component={SignIn} exact={true}/>
        </ul>
      </div>
      <div className="body">
        <img src={h1} alt="not displyed"></img>
        <ImageSlider/>
      </div>
    <footer/>
   
    </BrowserRouter>

  )
}
export default App;