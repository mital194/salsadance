import React from 'react';

import About1 from '../About1.png'
import About2 from '../About2.png'
import Navigation from './navigation'
import Baila from '../GalleryImages/Baila-2014-4.jpg'
import Baila1 from '../GalleryImages/Baila-2014-106.jpg'
import Baila2 from '../GalleryImages/Baila-2014-118.jpg'
import C1 from '../GalleryImages/Christmas-Boogaloo-(50-of-562).jpg'
import C2 from '../GalleryImages/Christmas-Boogaloo-(453-of-562).jpg'
import C3 from '../GalleryImages/Christmas-Boogaloo-2013-(121-of-404).jpg'
import C4 from '../GalleryImages/Christmas-Boogaloo-2013-(233-of-404).jpg'
import C5 from '../GalleryImages/Christmas-Boogaloo-2013-(328-of-404).jpg'
function Gallery(){
    return(
        
        <div >
           <Navigation/>
           <div className="Gallery">
                <img src={About1} alt={About1}/>
                <img src={About2} alt={About2}/>
                <img src={Baila} alt={Baila}/>
                <img src={Baila1} alt={Baila1}/>
                <img src={Baila2} alt={Baila2}/>
                <img src={C1} alt={C1}/>
                <img src={C2} alt={C2}/>
                <img src={C3} alt={C3}/>
                <img src={C4} alt={C4}/>
                <img src={C5} alt={C5}/>
                
            </div>
        </div>
    )
}
export default Gallery;