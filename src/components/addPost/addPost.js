import React from "react";
import "./addPost.css";
import logo from "../header/trees.png";
import imgBtnList from "../header/display-grid.png";
import imgBtnPen from "../header/pen.png";
import imgSearch from "./search-found.png";
import imgBtn from "./Union.png";
import { moods } from "../../helper.js";
import { createClient } from "pexels";

const spaceBetween = {
  display: "flex",
  justifyContent: "space-between",
};

class AddPost extends React.Component {
  state = {
    loading: false,
    gallery: null,
    selectImage: null,
  };

  titleRef = React.createRef();
  moodRef = React.createRef();
  dateRef = React.createRef();
  descriptionRef = React.createRef();

  createPost = (event) => {
    event.preventDefault();
    const title = this.titleRef.current.value,
      mood = this.moodRef.current.value,
      date = this.dateRef.current.value,
      description = this.descriptionRef.current.value,
      { gallery, selectImage } = this.state;

    if (!title) {
      alert("Введите название");
      return;
    }

    if (!mood) {
      alert("Выберите настроение");
      return;
    }

    if (!date) {
      alert("Введите дату");
      return;
    }

    if (!description) {
      alert("Введите описание");
      return;
    }

    if (selectImage === null) {
      alert("Выберите изображение");
      return;
    }

    const post = {
      title,
      mood,
      date: new Date(date),
      description,
      img: gallery[selectImage],
    };
    this.props.addPost(post);
    event.currentTarget.reset();
  };

  searchImages = () => {
    const query = document.getElementById("queryImages").value;
    const client = createClient(
      "563492ad6f9170000100000182f76e2451134ebfaf40a7a78ce215d1"
    );

    this.setState({ loading: true, selectImage: null });

    client.photos.search({ query, per_page: 20 }).then((photos) => {
      if (photos.status === 400 || !photos.total_results) {
        this.setState({ loading: false, gallery: null });
        return;
      }

      const gallery = photos.photos;
      this.setState({ loading: false, gallery });
    });
  };

  clickImage = (key) => {
    this.setState({ selectImage: key });
  };

  render() {
    const { loading, gallery, selectImage } = this.state;

    let galleryContent = "";

    if (loading) {
      galleryContent = "Загрузка...";
    }

    if (!loading && !gallery) {
      galleryContent = "Ничего не найдено по данному запросу";
    }

    if (!loading && gallery) {
      galleryContent = gallery.map((item, key) => {
        let classNames = "note-box-images__item";
        if (key === selectImage) {
          classNames += " note-box-images__item_checked";
        }
        return (
          <figure
            key={key}
            onClick={() => this.clickImage(key)}
            className={classNames}
          >
            <img src={item.src.medium} alt="" />
          </figure>
        );
      });
    }

    return (
      <>
        <section className="add-note">
          <div className="header" style={spaceBetween}>
            <div className="header-cont">
              <div className="header-logo">
                <img src={logo} alt="logo" />
              </div>
              <h1 className="header-title">Дневник</h1>
            </div>
            <div className="header-cont">
              <button className="header-btn-list adaptiv">
                <img src={imgBtnList} alt="icon1" />
                Список
              </button>
              <button className="header-btn-pen">
                <img src={imgBtnPen} alt="icon2" />
                Запись
              </button>
            </div>
          </div>
          <form onSubmit={this.createPost}>
            <div className="inputs">
              <input
                name="title"
                ref={this.titleRef}
                type="text"
                className="input-title"
                placeholder="Название"
              />
              <input
                id="queryImages"
                type="text"
                className="input-search"
                placeholder="Поиск"
              />
              <div onClick={this.searchImages} className="input-search-image">
                <img src={imgSearch} alt="" />
              </div>
            </div>
            <div className="note-box">
              <div className="note-box-block">
                <div className="block-row">
                  <select
                    name="mood"
                    ref={this.moodRef}
                    className="header-select"
                  >
                    {moods.map((item, key) => (
                      <option key={key}>{item}</option>
                    ))}
                  </select>
                  <input
                    name="date"
                    ref={this.dateRef}
                    type="date"
                    className="input-data"
                    placeholder="Дата"
                  />
                </div>
                <textarea
                  name="description"
                  ref={this.descriptionRef}
                  className="box-text"
                  placeholder="Описание"
                />
                <button className="header-btn-pen create">
                  <img src={imgBtn} alt="icon2" />
                  Создать
                </button>
              </div>
              <div id="gallery" className="note-box-images">
                {galleryContent}

                {/* <figure className="note-box-images__item note-box-images__item_checked">
                  <img src={blockImage_1} alt="" />
                </figure> */}
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default AddPost;
