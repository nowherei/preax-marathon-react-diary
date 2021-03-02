import React from "react";
import classes from "./Card.module.css";
import { formatDate } from "../../../helpers.js";

function Card({ index, title, text, date, emoji, photo, onCardClick }) {
  return (
    <div
      className={`${classes.card} popupLink`}
      onClick={() => onCardClick(index)}
    >
      <div className={classes.bg}>
        <img src={photo.src.large} alt="Image1"></img>
      </div>
      <div className={classes.descr}>
        <div className={classes.title}>{title}</div>
        <div className={classes.text}>{text}</div>
        <div className={classes.date}>{formatDate(date)}</div>
      </div>
      <div className={classes.emoji}>{emoji}</div>
    </div>
  );
}

export default Card;
