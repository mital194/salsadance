import React from 'react';
import './App.css'
import Footer from './pages/footer.js';
import ImageSlider from './ImageSlider.js';
import HeaderNav from './pages/headerNav.js';

function App() {
  
  return (
    <div>
       <HeaderNav/>
        <ImageSlider/>
        <Footer/>
    </div>
  )
}
export default App;