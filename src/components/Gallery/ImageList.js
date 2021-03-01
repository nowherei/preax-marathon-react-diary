import React from "react";
import ImageCard from "./ImageCard";
import './ImageList.css'

const ImageList = (props) => {
  return (
    <div className='image-list'>
      { props.images.map(img => <ImageCard key={img.id} src={img.urls.small} alt={img.alt_description} />)}
    </div>
  )
}

export default ImageList;