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
//import h1 from '/images/h1.jpg';
import Footer from './pages/footer.js';
import ImageSlider from './ImageSlider.js';
//import Header from './pages/header';
function App() {
  return (
    <div className="header">
    <BrowserRouter>
        <Route path="/" component={Index} exact={true}/>
        <Route path="/Classes" component={Classes} exact={true}/>
        <Route path="/UpcomingEvent" component={UpcomingEvent} exact={true}/>
        <Route path="/about" component={About} exact={true}/>
        <Route path="/contact" component={Contact} exact={true}/>
        <Route path="/signIn" component={SignIn} exact={true}/>

      </BrowserRouter>
       <div className="body">
        <ImageSlider/>
       </div>
       <div>
         <Footer/>
       </div>
       </div>
  )
}
export default App;