import React, { Component } from 'react';
import './postListItem.css';

export default class PostListItem extends Component {
    render() {
        const {imgSmile, title, date, descr, img} = this.props;

        return (
            <div className="note-img">
                <figure className="note-background">
                    <img src={img} alt={title} />
                </figure>
                <div className="note-round">{imgSmile}</div>
                <div className="note-text-box">
                    <div className="note-text-div">
                        <div className="note-text-title">{title}</div>
                        <div className="note-text-data">{date}</div>
                    </div>
                    <div>
                        <div className="note-text-descr">{descr}</div>
                    </div>
                </div>
            </div>
        )
    }
}