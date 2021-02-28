import logo from "../assets/logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div class="container-fluid">
        <div className="header__logo">
          <div className="header__logo-image">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="header__logo-title">Дневник</div>
        </div>
        <div className="header__search">
          <form action="" className="header__search-form">
            <input type="text" className="header__search-input" placeholder="Поиск" />
            <select>
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
          </form>
        </div>
        <div className="header__buttons">
          <a href="/" className="header__button-list button">
            Список
          </a>
          <a href="/add/" className="header__button-add button">
            Запись
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
