import React from "react";
import {formatDate} from "../../helpers";

import "./Modal.css";

const Modal = ({ item, modalClose }) => {
  const { title, text, date, emoji, photo } = item;
  return (
    <div className="modal" id="modal">
      <div className="modal__wrapper">
        <div className="modal__main">
          <div
            className="modal__close"
            onClick={modalClose}
          >
            Close
          </div>
          <div className="modal__header">
            <div className="modal__emoji">{emoji}</div>
            <div className="modal__title">{title}</div>
            <div className="modal__date">{formatDate(date, "long")}</div>
          </div>
          <div className="modal__body">
            <div className="row">
              <div className="col-lg-4">
                <figure className="modal__image">
                  <img
                    src={photo.src.large}
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-lg-8">
                <div className="modal__text">
                  {text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;