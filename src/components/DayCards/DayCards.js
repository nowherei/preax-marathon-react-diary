import React from "react";
import Card from "./Card/Card";
import classes from "./DayCards.module.css";

function DayCards(props) {
  return (
    <div className={classes.dayWrapper}>
      {props.cards.map((card, key) => {
        const { title, text, date, emoji, photo } = card;
        return (
          <Card
            key={key}
            index={key}
            title={title}
            text={text}
            date={date}
            emoji={emoji}
            photo={photo}
            onCardClick={props.onCardClick}
          />
        );
      })}
    </div>
  );
}

export default DayCards;
