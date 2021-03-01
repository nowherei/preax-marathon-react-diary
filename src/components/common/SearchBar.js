import React from 'react';
import classes from './Common.module.css';


function SearchBar() {
  return (
    <div className={classes.searchInput}>
      <input type='text' placeholder='Поиск' />
    </div>
  );
}

export default SearchBar;
