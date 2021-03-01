import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import { getImages } from "./api/unsplash";
import classes from '../NewNote/NewNote.module.css';


class Gallery extends React.Component {

  state = { images: [] }

  onFormSubmit = async term => {
    const imagesAPI = await getImages(term);
    this.setState({ images: imagesAPI });
  }

  render() {
    return (
      <div className={classes.gallery}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default Gallery; 