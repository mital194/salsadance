import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';
//import Navigation from './pages/navigation.js';
import ImageSlider from './ImageSlider';
import Footer from './pages/footer.js';
import navigation  from './pages/navigation';
import Contact from './pages/Contact';
import About from './pages/About';
import Classes from './pages/Classes';
import UpcomingEvent from './UpcomingEvent'
import Gallery from './pages/Gallery'
import Instructors from './pages/Instructors'
//import Login from './pages/Login';
//import havanaEvent from './pages/havanaEvent';

//import Home from './pages/home';
//import Havana from './Havana+2020+Instagram.png'

function App(){

  // let [username, setUsername] = React.useState('');
 

    return(
    <div className="app">
    <BrowserRouter>
    <div className="headertext">
    <h1 >Welcome to the Salsa Dance Classes</h1>
        <Route path="/" exact={true} component={navigation}/>
        <Route path={'/Classes'} component={Classes} exact={true}/>
        <Route path={'/Contact'} component={Contact} exact={true}/>
        <Route path={'/About'} component={About} exact={true}/> 
        <Route path={'/UpcomingEvent'} component={UpcomingEvent} exact={true}/>   
        <Route path={'/Gallery'} component={Gallery} exact={true}/>
        <Route path={'/Instructors'}component={Instructors} exact={true}/>
        {/* <Route path={'/login'}>
          <Login 
            username={username} 
            setUsername={setUsername} 
           
          />
        </Route> */}

        </div>
        <div>
        <ImageSlider/>
        </div>
        <div>
        <Footer/>
        </div>
    </BrowserRouter>
    </div>
  )
}
export default App;