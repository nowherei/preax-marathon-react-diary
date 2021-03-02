import React from "react";
import { BrowserRouter, Switch, Route } from "react-browser-router";

import "./App.css";
import DayCards from "./components/DayCards/DayCards";
import Header from "./components/Header/Header";
import NewNote from "./components/NewNote/NewNote";
import Modal from "./components/Modal/Modal";

import { cards } from "./helpers.js";

class App extends React.Component {
  state = {
    cards,
    modalCard: null,
  };

  onCardClick = (id) => {
    this.setState({ modalCard: id });
  };

  modalClose = () => {
    this.setState({ modalCard: null });
  };

  render() {
    const { cards, modalCard } = this.state;

    const modal =
      modalCard !== null ? (
        <Modal item={cards[modalCard]} modalClose={this.modalClose} />
      ) : null;

    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <DayCards
                    cards={cards}
                    onCardClick={this.onCardClick}
                  />
                )}
              />
              <Route path="/new" component={NewNote} />
            </Switch>
          </div>
          {modal}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
