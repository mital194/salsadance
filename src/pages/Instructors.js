import React from 'react';
// import {
//     Link 
// }from 'react-router-dom';
import kim1 from '../GalleryImages/Kim1.jpg'
import Ervin from '../GalleryImages/Ervin.jpg'
import madrina from '../GalleryImages/image-asset.jpeg'
function Instructors(){
    return(
        <div>
        <h1>Our Instructors</h1>
         <div className="info-box">
              <div>
                 <h2>Kimberly Parent </h2>
                <img src={kim1} alt={kim1}/>
             </div>
         <div>
            <p>
                Kimberly Parent has always loved to dance, but when she discovered Cuban music and dance, 
                there was an instant connection—something inside her changed.
                <br/> After spending a year overseas learning and teaching, 
                she returned to Saskatoon only to find a deficit in the genre with which she’d fallen in love.<br/> 
                In fact, there were no Salsa lessons being offered in her hometown beyond ballroom style.
                And so it was that in 2003 Kimberly Parent began teaching Salsa simply to have others to dance with.<br/>
                In no time, her performance group La Carisma was born.<br/>

                The momentum of La Carisma led Kimberly to secure studio space for formal classes and soon,<br/>
                Saskatoon Salsa was thriving, delighting students of every age and winning ‘Best Dance Studio in Saskatoon’ in 2010.<br/>
                In June 2014, members of the troupe were invited to and travelled to San Juan,<br/>
                Puerto Rico to participate in the World Children's Salsa Congress.<br/>

                In addition to heading up Saskatoon Salsa, Kimberly continues to perform and in January 2014,<br/>
                she and her partner Troy Davies won Audience Favourite at the GMG Jewellers Swinging with the Stars charity competition.<br/>
                Kimberly also furthers her dance education on a regular basis,<br/>
                training with professionals all over the world including New York, Taiwan, Australia, and Canada,<br/>
                always bringing her enhanced expertise and rejuvenated drive back to Saskatoon Salsa.<br/>
             </p>
        </div>

        <div  className="info-container">
            <h2>Ervin Kormos and Paul</h2>
            <img src={Ervin} alt={Ervin}/>
        </div>
        <div>
            <p>
                In 2002, Ervin Kormos began dancing and teaching Salsa in his homeland of Romania at the Salsa Caliente Dance Studio. <br/>
                It was the first Salsa school in the city of Cluj and one of the first in the country but since that time,
                the community has grown to have more than ten dance schools, all run by Ervin's previous students.<br/>
                During Ervin’s time at Salsa Caliente, he performed at and attended International Salsa Congresses 
                in Bulgaria, Hungary, Romania, and England and 2006, he moved to the Cayman Islands where he continued to teach
                and grow the local dance community.
                <br/> During that time, Ervin travelled a number of times to Cuba to gain exposure 
                to the Cuban Casino Style Salsa and, when he moved to Saskatoon at the beginning of 2012, Ervin began teaching,
                choreographing, and performing with Saskatoon Salsa Dance Company.<br/>

                Ervin teaches simply because he enjoys dancing and people. <br/>
                He is passionate about bringing a smile to the faces of his students, and igniting 
                that passion in others for dance and growing the Salsa community in Saskatoon.
                <br/> Outside the dance studio,
                you can find him volunteering with Saskatoon Salsa at community events and fundraisers,
                performing at community and corporate events, and furthering his training at both International Salsa 
                Congresses and various workshops across Canada.<br/>
              </p>
            </div>


                <div  className="info-container">
                <h2>Mariana Lessa</h2>
                <img src={madrina} alt={madrina}/>
                </div>
                <div>
                <p>

                Born and raised in Brazil, Mariana Lessa grew up dancing, <br/>
                training in several Brazilian styles of dance before moving in 1990 with her family to Canada.<br/>
                From there, her dance vocabulary only expanded and Mariana is now fluent in Samba, Merengue, Cumbio, Frevo, African, 
                Dancehall, Hip Hop, and more. Mariana loves to teach, to meet new people,
                and to share in the joy as she helps her students express themselves through dance.<br/>
                What she appreciates most about Saskatoon Salsa is that it’s professional yet fun, 
                and that it brings enormous opportunities to students and members in the form of performance, workshops, and social connections.<br/>
                Mariana continues to take part in workshops herself, and embraces every opportunity to hone and increase her skills..<br/>
                </p>
                </div>

                
                <div  className="info-container">
                <h2>Mariana Lessa</h2>
                <img src={madrina} alt={madrina}/>
                </div>
                <div>
                <p>

                Born and raised in Brazil, Mariana Lessa grew up dancing, <br/>
                training in several Brazilian styles of dance before moving in 1990 with her family to Canada.<br/>
                From there, her dance vocabulary only expanded and Mariana is now fluent in Samba, Merengue, Cumbio, Frevo, African, 
                Dancehall, Hip Hop, and more. Mariana loves to teach, to meet new people,
                and to share in the joy as she helps her students express themselves through dance.<br/>
                What she appreciates most about Saskatoon Salsa is that it’s professional yet fun, 
                and that it brings enormous opportunities to students and members in the form of performance, workshops, and social connections.<br/>
                Mariana continues to take part in workshops herself, and embraces every opportunity to hone and increase her skills..<br/>
                </p>
                </div>
        </div>
        </div>


    )
}
export default Instructors;