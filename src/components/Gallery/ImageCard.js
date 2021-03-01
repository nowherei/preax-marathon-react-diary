import classes from "../NewNote/NewNote.module.css";
import React, { useEffect } from "react";

// import './ImageList.css'

const ImageCard = ({ src, alt }) => {

  const [span, setSpan] = React.useState(0);
  const imgRef = React.useRef();

  useEffect(() => {
    imgRef.current.addEventListener('load', setSpans)
  }, [])

  const setSpans = () => {
    const height = imgRef.current.clientHeight;

    const spans = Math.ceil(height / 10);
    setSpan(spans);
  }

  const onImageClick = (e) => {
    e.target.parentElement.classList.toggle('active');
  }

  return (
    <div style={{ gridRowEnd: `span ${span}` }} class={classes.galleryImg} onClick={onImageClick}>
      <img ref={imgRef} src={src} alt={alt} />
    </div>
  )
}

export default ImageCard;