import React from 'react';
import classes from './Note.module.css';
import photo from '../../assets/bg_images/day-1.jpg';


function Note({ title, text, date, emoji }) {
  return (
    <div id='popup' className={classes.note}>
      <div className={classes.popupContent}>
        <div className={classes.header}>
          <div className={classes.emoji}>{emoji}</div>
          <div className={classes.title}>{title}</div>
          <div className={classes.date}>{date}</div>
        </div>
        <div className={classes.body}>
          <div className={classes.photo}>
            <img src={photo} alt='/' />
          </div>
          <div className={classes.text}>{
            text.map(p => <p>{p}</p>)
          }</div>
        </div>
        <div className={`${classes.close} close`}></div>
      </div>
    </div>
  );
}

export default Note;
