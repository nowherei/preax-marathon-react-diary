import React from 'react';
import Card from './Card/Card';
import classes from './DayCards.module.css';


function DayCards(props) {
  return (
    <div className={classes.dayWrapper}>
      {props.cards.map(card => <Card key={card.id} title={card.title} text={card.text} date={card.date} emoji={card.emoji} photo={card.photo} />)}
    </div>


  );
}

export default DayCards;
