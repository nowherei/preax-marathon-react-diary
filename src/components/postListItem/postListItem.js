import React, { Component } from 'react';
import './postListItem.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {imgSmile, title, date, descr} = this.props;

        return (
            <>
                <div className="note-round">
                    <img src={imgSmile}/>
                </div>
                <div className="note-text-box">
                    <div className="note-text-div">
                        <div className="note-text-title">{title}</div>
                        <div className="note-text-data">{date}</div>
                    </div>
                    <div>
                        <div className="note-text-descr">{descr}</div>
                    </div>
                </div>
            </>
        )
    }
}