import React from 'react';
import classes from './Common.module.css';


function MoodSelect() {
  return (
    <div className={classes.moodSelect} >
      <select name='mood'>
        <option value="exсelent">&#128516;</option>
        <option value="ok" selected>&#128528;</option>
        <option value="bad">&#128532;</option>
      </select>
    </div>
  );
}

export default MoodSelect;
