import React from 'react';
import classes from './Common.module.css';


function Button({ icon, text, background }) {
  return (
    <div >
      <button className={classes.btn} type='button'>{text}</button>
    </div>
  );
}

export default Button;
