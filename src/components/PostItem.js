import React from "react";

import "./PostItem.css";
import { formatDate } from "../helpers.js";

const PostItem = ({ item }) => {
  const { title, text, image, date, emoji } = item;

  return (
    <div className="col-sm-6 col-lg-3">
      <div
        className="post-list__item"
        onClick={() => {
          const modal = document.getElementById("modal");
          modal.classList.add("modal_open");
        }}
      >
        <figure className="post-list__item-image">
          <img src={image} alt=""></img>
        </figure>
        <div className="post-list__item-emoji">{emoji}</div>
        <div className="post-list__item-description">
          <div className="post-list__item-title-date">
            <div className="post-list__item-title">{title}</div>
            <div className="post-list__item-date">{formatDate(date)}</div>
          </div>

          <div className="post-list__item-text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
