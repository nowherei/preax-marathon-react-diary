import React from 'react';
import classes from './Common.module.css';


function MoodSelect() {

    const moods = ["😌", "😊", "😄", "🤣", "😰", "🥰", "🙃", "😔", "😇", "🤔", "😩", "😭", "😤", "😵", "🤒", "🤤"];
    return (
        <div className={classes.moodSelect} >
            <select name='mood'>
                {
                    moods.map((mood, index) => <option key={index} value={`mood${index}`}>{mood}</option>)
                }
            </select>
        </div>
    );

}

export default MoodSelect;
