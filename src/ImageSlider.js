import React from 'react';
import h1 from './images/h1.jpg';
import h2 from './images/h2.jpg';
import SimpleImageSlider from "react-simple-image-slider";

function ImageSlider(){
    const Images=[
        { url: "images/h1.jpg" },
        { url: "images/h2.jpg" },
       ];
    return (
        <SimpleImageSlider
        width={896}
        height={504}
        images={Images}
    />
       );
    
}
export default ImageSlider;