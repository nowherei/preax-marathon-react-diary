import React, { Component } from 'react';
import './modal.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {img, title, data, descr, imgPost} = this.props;

        return (
            <>
                <div className="modal-box">
                    <div className="modal-header">
                        <div className="modal-feel">
                            <div>
                                <img src={img}/>
                            </div>
                            <div className="modal-title">
                                <span>{title}</span>
                            </div>
                        </div>
                        <div className="modal-time">
                            <span>{data}</span>
                        </div>
                    </div>
                    <div className="modal-wrapper">
                        <img src={imgPost}/>
                        <div className="modal-descr">
                            {descr}
                        </div>
                    </div>
                    <div className="modal-close">&times;</div>
                </div>
            </>
        )
    }
}