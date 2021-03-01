import React, { Component } from 'react';
import './modal.css';

export default class Modal extends Component {
    render() {
        const {img, title, data, descr, imgPost} = this.props;

        return (
            <>
                <div className="modal-box">
                    <div className="modal-header">
                        <div className="modal-feel">
                            <div>
                                <img src={img} alt=""/>
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
                        <img src={imgPost} alt=""/>
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