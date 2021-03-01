import React from 'react';
import classes from './Card.module.css';
import { popupWork } from '../../../popups';


function Card({ title, text, date, emoji, photo }) {
  const onCardClick = (e) => {
    // popupWork(e.target.parentElement.parentElement);
  };

  return (
    <div className={`${classes.card} popupLink`} onClick={onCardClick} dataPopup='#popup'>
      <div className={classes.bg} >
        <img src={photo} alt="Image1"></img>
        {/* <img src={require(photo)} alt='/' /> */}
      </div>
      <div className={classes.descr}>
        <div className={classes.title}>{title}</div>
        <div className={classes.text}>{text}</div>
        <div className={classes.date}>{date}</div>
      </div>
      <div className={classes.emoji}>{emoji}</div>
    </div >
  );
}
// style = {{ background: `url(${photo})` }}

export default Card;
