import React from 'react';
import './addPost.css';
import logo from '../header/trees.png';
import imgBtnList from '../header/display-grid.png';
import imgBtnPen from '../header/pen.png';
import imgSearch from './search-found.png';
import blockImage_1 from '../postList/note_1.png';
import blockImage_2 from '../postList/note_2.png';
import blockImage_3 from '../postList/note_3.png';
import blockImage_4 from '../postList/note_4.png';
import blockImage_5 from '../postList/note_5.png';
import imgBtn from './Union.png';

const spaceBetween = {
    display: 'flex',
    justifyContent: 'space-between'
};

function AddPost() {
    return (
        <>
            <section className="add-note">
                <div className="header" style={spaceBetween}>
                <div className="header-cont">
                        <div className="header-logo">
                            <img src={logo} alt='logo'/>
                        </div>
                        <h1 className="header-title">Дневник</h1>
                </div>
                    <div className="header-cont">
                        <button className="header-btn-list adaptiv">
                            <img src={imgBtnList} alt='icon1'/>
                            Список</button>
                        <button className="header-btn-pen">
                            <img src={imgBtnPen} alt='icon2'/>
                            Запись</button>
                    </div>
                </div>
                <div className="inputs">
                    <input type="text" className="input-title" placeholder="Название"/>
                    <input type="text" className="input-search" placeholder="Поиск"/>
                    <div className="input-search-image">
                        <img src={imgSearch}/>
                    </div>
                </div>
                <div className="note-box">
                    <div className="note-box-block">
                        <div className="block-row">
                            <select className="header-select">
                                <option>🤔</option>
                                <option>😑</option>
                                <option>😌</option>
                            </select>
                            <input type="text" className="input-data" placeholder="Дата"/>
                        </div>
                        <textarea className="box-text" placeholder="Описание"/>
                        <button className="header-btn-pen create">
                            <img src={imgBtn} alt='icon2'/>
                            Создать</button>
                    </div>
                    <div className="note-box-images">
                        <div className="block-image">
                            <img src={blockImage_1} alt="block-image"/>
                        </div>
                        <div className="block-image">
                            <div className="note-area checked">
                                <div className="note-check">&#10004;</div>
                                <img src={blockImage_2} alt="block-image"/>
                            </div>
                            <div className="note-area bottom">
                                <img src={blockImage_3} alt="block-image"/>
                            </div>
                        </div>
                        <div className="block-image">
                            <img src={blockImage_4} alt="block-image"/>
                        </div>
                        <div className="block-image">
                            <img className="height" src={blockImage_5} alt="block-image"/>
                        </div>
                    </div>
                </div>  
            </section>
        </>
    )
}

export default AddPost;