import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import FormAdd from "./components/FormAdd";
import Modal from "./components/Modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/add/" component={FormAdd} />
        </Switch>
      </BrowserRouter>
      <Modal />
    </div>
  );
}

export default App;
