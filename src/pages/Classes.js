import React from 'react';
//import Navigation from './navigation';

// import {
//     Link
// }from 'react-router-dom';
import session from '../Screen+Shot+2019-12-02+at+10.43.42+AM.png';
//import event1 from '../NWB_SaskatoonSalsa_Products_Class-blue.png';
import event2 from '../NWB_SaskatoonSalsa_Products_Instruction-01.png';
import Navigation from './navigation'
 function Classes(){
    return(
        <div >
             <Navigation/>
             <h3>
             FALL-WINTER 2019-20 Recreational Classes 
                * Registration is online below and continues until sold out. See below for registration options<br/>
        
                <br/>
                SESSION DATES:<br/>
                Fall Session 2  - begins November 6th <br/>
                Winter Session 1 - begins January 6th<br/>
        
                <br/>
                COST: <br/>
                12 week session: $160.00 + gst ($136.00 + gst for members)<br/>
                8 week session: $120.00 + gst ($102.00 + gst for members)<br/>
                6 week session : $90.00 + gst ($76.50 + gst for members)<br/>
                4 week session : $60.00 + gst ($51.00 + gst for members)<br/>
                <br/>
                REFUND POLICY:<br/>
                Once a class is purchased, we do not offer refunds or credits. 
                 Classes are transferable to another student if the student meets the criteria. <br/>
                 <br/>
                WHAT TO WEAR: <br/>
                Wear whatever you are comfortable dancing in.  
                Please bring CLEAN, non-scuffing indoor shoes (dance heels, flats, or even socks work fine. Dress shoes for men) and bring a water bottle.  We do not recommend runners.
                <br/>
                CLASS LEVELS:<br/>
                 Our Salsa levels progress as follows: <br/>
                Absolute Beginner Salsa <br/>
                Salsa Level 2 <br/>
                Salsa Level 3 <br/>
                Inermediate I/br/>
                Intermediate II<br/>
                Advanced <br/>
                <br/>
                Classes range between 1 hour - 90 minute <br/>

                </h3>
            <div className="image">
                <img src={session} alt={session}/>
            </div>
           
           <div className="events">
           <h1>FALL 2019</h1>
               <div className="image">
                    <img src={event2} alt={event2}/><br/>
                    Intermediate Ladies Salsa Workshop<br/> |
                     S1-2020 42.00<br/>
                    Runs | Saturday February 29th @ 1:00pm - 3:00pm<br/>
                    Cost | $42.00  <br/>
                    Instructor | Kimberly<br/>
                   
                 </div>  
                 <div  className="image">
                    <img src={event2} alt={event2}/><br/>
                    Absolute Beginner Salsa | S1-2020 126.00<br/>
                    Runs | Fridays @ 6:00pm - 6:55pm<br/>
                    Dates | Nov 8 - Dec 13th (6-week session)<br/>
                    Cost | $90.00 + gst ($94.50)<br/>
                    Instructor | Gabe<br/>
                   
                 </div>  
                 <div  className="image">
                    <img src={event2} alt={event2}/><br/>
                    Advanced Salsa | S1-2020<br/>
                    126.00<br/>
                    Runs | Mondays @ 7:00pm - 7:55pm<br/>
                    Dates |Jan 13-March 9 (8 weeks) <br/>
                    Cost | $120.00 + gst ($126.00)<br/>
                    Instructor | Ervin<br/>
                    

                 </div> 
                 <div  className="image">
                    <img src={event2} alt={event2}/><br/>
                        Absolute Beginner Bachata | S1-2020<br/>
                        126.00<br/>
                        Runs | Wednesdays @ 8:30pm - 9:30pm<br/>
                        Dates | January 15-March 4 (8-week session)<br/>
                        Cost | $120.00 + gst ($126.00)<br/>
                        Instructor | Christian<br/>
                   
                 </div> 
                 <div  className="image">
                    <img src={event2} alt={event2}/><br/>
                        Ladies Salsa (Beginner) | S1-2020<br/>
                        126.00<br/>
                        Runs | Mondays @ 5:00-5:55pm<br/>
                        Dates | February 24-April 20 (8-week session)<br/>
                        *No class April 13th<br/>
                        Cost | $120.00 + gst ($126.00)<br/>
                        Instructor | Kimberly<br/>
                    
                 </div> 
           </div>
         </div>
    
            
    )
}
export default Classes;