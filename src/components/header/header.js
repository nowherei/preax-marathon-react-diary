import React from 'react';
import logo from './trees.png';
import imgBtnList from './display-grid.png';
import imgBtnPen from './pen.png';
import './header.css';

function Header() {

    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <img src={logo} alt='logo'/>
                </div>
                <h1 className="header-title">Дневник</h1>
                <input type="text" className="header-input" placeholder='Поиск'/>
                <select className="header-select">
                    <option>🤔</option>
                    <option>😑</option>
                    <option>😌</option>
                </select>
                <button className="header-btn-list">
                    <img src={imgBtnList} alt='icon1'/>
                    Список</button>
                <button className="header-btn-pen">
                    <img src={imgBtnPen} alt='icon2'/>
                    Запись</button>
            </header>
        </>
    )
}

export default Header;