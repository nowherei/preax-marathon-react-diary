import React from 'react';
import MoodSelect from '../common/MoodSelect';
import Gallery from '../Gallery/Gallery';
import classes from './NewNote.module.css';
// import photo from '../../../assets/bg_images/day-1.jpg';


function NewNote() {
  return (
    <div className={classes.note}>
      <div className={classes.content}>
        <div className={classes.column}>
          <div className={classes.body}>
            <div className={classes.input}>
              <input placeholder='Название' />
            </div>
            <div className={classes.row}>
              <MoodSelect />
              <div className={`${classes.date} ${classes.input}`}>
                <input placeholder={'Дата'} />
              </div>
            </div>
            <div className={`${classes.textarea} ${classes.input}`}>
              <textarea placeholder='Описание' />
            </div>
            <div className={classes.btnWrapper}>
              <button className={`${classes.btn} ${classes.btn__green}`} type='button'>Создать</button>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.body}>
            <div className={classes.search}>
              {/* <SearchBar /> */}
              <Gallery />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default NewNote;
