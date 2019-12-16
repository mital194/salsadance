import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

function ImageSlider(){
    const Images=[
        { url: "images/h1.jpg" },
        { url: "images/h2.jpg" },
        { url: "images/h3.jpg" },
        { url: "images/h4.jpg" },
        { url: "images/h5.jpg" },
       ];
    
    return (
        <div className="slider">
        <SimpleImageSlider
        width={1500}
        height={704}
        images={Images}
         />
    </div>
    )
}
export default ImageSlider;