import React from "react";

import { images } from "../default.js";
import "./FormAdd.css";

const FormAdd = () => {
  return (
    <main class="main">
      <div class="container-fluid">
        <div className="form-add">
          <form action="">
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  className="form-add__field-title"
                  placeholder="Название"
                />
                <select className="form-add__field-emoji">
                  <option>😀</option>
                  <option>😁</option>
                  <option>😂</option>
                  <option>🤣</option>
                  <option>😃</option>
                  <option>😄</option>
                  <option>😅</option>
                  <option>😆</option>
                  <option>😉</option>
                  <option>😊</option>
                  <option>😋</option>
                  <option>😎</option>
                  <option>😍</option>
                  <option>😘</option>
                  <option>😗</option>
                  <option>😙</option>
                  <option>😚</option>
                  <option>☺</option>
                  <option>🙂</option>
                  <option>🤗</option>
                  <option>🤔</option>
                  <option>😐</option>
                  <option>😑</option>
                  <option>😶</option>
                  <option>🙄</option>
                  <option>😏</option>
                  <option>😣</option>
                  <option>😥</option>
                  <option>😮</option>
                  <option>🤐</option>
                  <option>😯</option>
                  <option>😪</option>
                  <option>😫</option>
                  <option>😴</option>
                  <option>😌</option>
                  <option>🤓</option>
                  <option>😛</option>
                  <option>😜</option>
                  <option>😝</option>
                  <option>🤤</option>
                  <option>😒</option>
                  <option>😓</option>
                  <option>😔</option>
                  <option>😕</option>
                  <option>🙃</option>
                  <option>🤑</option>
                  <option>😲</option>
                  <option>☹</option>
                  <option>🙁</option>
                  <option>😖</option>
                  <option>😞</option>
                  <option>😟</option>
                  <option>😤</option>
                  <option>😢</option>
                  <option>😭</option>
                  <option>😦</option>
                  <option>😧</option>
                  <option>😨</option>
                  <option>😩</option>
                  <option>😬</option>
                  <option>😰</option>
                  <option>😱</option>
                  <option>😳</option>
                  <option>😵</option>
                  <option>😡</option>
                  <option>😠</option>
                  <option>😇</option>
                  <option>🤠</option>
                </select>
                <input
                  type="text"
                  className="form-add__field-date"
                  placeholder="Дата"
                />

                <textarea className="form-add__field-text" name="">
                  Описание
                </textarea>

                <button className="form-add__button-submit button">
                  Создать
                </button>
              </div>
              <div className="col-6">
                <div className="form-add__search">
                  <input
                    className="form-add__search-input"
                    type="text"
                    placeholder="Поиск"
                  />
                  <button className="form-add__search-button">Поиск</button>
                </div>
                <div className="form-add__gallery">
                  <div className="row">
                    <div className="col-6">
                      {images.map((image) => {
                        return (
                          <figure className="form-add__gallery-item">
                            <img src={image} alt="" />
                          </figure>
                        );
                      })}
                    </div>
                    <div className="col-6">
                      {images.map((image, key) => {
                        let className = "form-add__gallery-item";
                        if (key === 0) {
                          className += " form-add__gallery-item_active";
                        }
                        return (
                          <figure className={className}>
                            <img src={image} alt="" />
                          </figure>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default FormAdd;
