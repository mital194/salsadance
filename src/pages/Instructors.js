import React from 'react';
import {
    Link 
}from 'react-router-dom';
import kim1 from './kim1.jpg'
function Instructors(){
    return(
     <div>
        <h1>Our Instructors</h1>

        <div><h2>Kimberly Parent </h2>
            <img src={kim1} alt={}/>
            <p>
            Kimberly Parent has always loved to dance, but when she discovered Cuban music and dance, there was an instant connection—something inside her changed. After spending a year overseas learning and teaching, she returned to Saskatoon only to find a deficit in the genre with which she’d fallen in love. In fact, there were no Salsa lessons being offered in her hometown beyond ballroom style. And so it was that in 2003 Kimberly Parent began teaching Salsa simply to have others to dance with. In no time, her performance group La Carisma was born.

            The momentum of La Carisma led Kimberly to secure studio space for formal classes and soon, Saskatoon Salsa was thriving, delighting students of every age and winning ‘Best Dance Studio in Saskatoon’ in 2010. In June 2014, members of the troupe were invited to and travelled to San Juan, Puerto Rico to participate in the World Children's Salsa Congress.

            In addition to heading up Saskatoon Salsa, Kimberly continues to perform and in January 2014, she and her partner Troy Davies won Audience Favourite at the GMG Jewellers Swinging with the Stars charity competition. Kimberly also furthers her dance education on a regular basis, training with professionals all over the world including New York, Taiwan, Australia, and Canada, always bringing her enhanced expertise and rejuvenated drive back to Saskatoon Salsa.
            </p>

        </div>

        <div>
            <h2>Ervin Kormos</h2>
            <img src={Ervin} alt={}/>
            <p>


            In 2002, Ervin Kormos began dancing and teaching Salsa in his homeland of Romania at the Salsa Caliente Dance Studio. It was the first Salsa school in the city of Cluj and one of the first in the country but since that time, the community has grown to have more than ten dance schools, all run by Ervin's previous students. During Ervin’s time at Salsa Caliente, he performed at and attended International Salsa Congresses in Bulgaria, Hungary, Romania, and England and 2006, he moved to the Cayman Islands where he continued to teach and grow the local dance community. During that time, Ervin travelled a number of times to Cuba to gain exposure to the Cuban Casino Style Salsa and, when he moved to Saskatoon at the beginning of 2012, Ervin began teaching, choreographing, and performing with Saskatoon Salsa Dance Company.

            Ervin teaches simply because he enjoys dancing and people. He is passionate about bringing a smile to the faces of his students, and igniting that passion in others for dance and growing the Salsa community in Saskatoon. Outside the dance studio, you can find him volunteering with Saskatoon Salsa at community events and fundraisers, performing at community and corporate events, and furthering his training at both International Salsa Congresses and various workshops across Canada.
            </p>
        </div>
    </div>
    )
}
export default Instructors;