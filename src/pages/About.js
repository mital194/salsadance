import React from 'react';
import{
    Link
}from 'react-router-dom';
import About1 from '../About1.png'
import About2 from '../About2.png'
import Navigation from './navigation'
function About(){
    return(
        <div>
        <div> 
            <Link to="/Contact" exact={true}></Link>
           <Navigation/>
        </div>
           <h1> The Story of Saskatoon Salsa</h1>
           <div className="about">
            <h2 >
                If you love to dance, you should dance! That’s what Saskatoon Salsa believes,
                <br/> and with classes tailored to every age and experience level, 
                it’s a philosophy that has made them Saskatoon’s premiere Salsa dance school for ten years running.

                Established in 2005, Saskatoon Salsa proudly offers lessons for every demographic
                from six years old and up including classes for individuals, couples classes, 
                and even a ladies-only Salsa class. And if your goal is performance,
                you can look forward to learning other Cuban dance favourites like Mambo, Cha-Cha-Cha, Rumba, and more!
                In addition to their core programming of Cuban dance, Saskatoon Salsa also offers the globe-trotting dance lessons of Bachata, Rueda de Casino, Bollywood, and Kizomba.

                Led by Kimberly Parent and her team of experienced and personable instructors, 
                every class at Saskatoon Salsa features both instruction and actual dancing to music so you learn in the most hands-on (and most fun) way.
                No matter if you’re six or seventy, if you want to get up on stage or just get a little exercise with a smile on your face, 
                Saskatoon Salsa is excited to be your destination for dance.
            </h2>
            </div>
            <div>
                <img src={About1} alt={About1}/>
                <img src={About2} alt={About2}/>
            </div>
        </div>
    )
}
export default About;