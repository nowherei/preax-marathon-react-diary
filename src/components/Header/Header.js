import React from 'react';
import classes from './Header.module.css';
import logo from '../../assets/logo.svg';
import SearchBar from '../common/SearchBar';
import MoodSelect from '../common/MoodSelect';
import Button from '../common/Button';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className={`${classes.header} ${classes.lockPadding}`}>
      <div className={classes.container}>
        <div className={classes.headerContent}>
          <div className={classes.logo}>
            <a href='/'>
              <img src={logo} alt='Logo' />
            </a>
          </div>
          {/* <div className={classes.search}>
            <SearchBar />
            <MoodSelect />
          </div> */}
          <div className={classes.btns}>
            {/* <NavLink to={'/new'}>

            </NavLink> */}
            <Link to={'/'}>
              <span className={`${classes.btn} ${classes.btn__orange}`}> Список</span>
            </Link>
            <Link to={'/new'}>
              <span className={`${classes.btn} ${classes.btn__green}`}>Запись</span>
            </Link>

            {/* <button type='button' className={`${classes.btn} ${classes.btn__orange}`}><span>Список</span></button> */}
            {/* <button type='button' className={`${classes.btn} ${classes.btn__green}`}><span>Запись</span></button> */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
