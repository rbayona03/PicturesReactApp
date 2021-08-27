import './imageStyle.css';
import ImageCard from './imageCard';
import React from 'react';


const ImageList = props => {
    /* This component loops through array returning the index items URL*/
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image}/>
    })
    //this returns the index url into DOM
    return <div className="image-list">{images}</div>
};

export default ImageList;