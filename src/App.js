import { useState } from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Modal from "./Modal.js";
import Editor from "./Editor.js";
import { posts } from "./data";

import "./App.css";

function App() {

  const [notes, setNotes] = useState(posts);

  console.log(notes);

  const onPostAdded = newNote => {
    setNotes({ ...posts, newNote });
  };

  const [isEditorDisplayed, toggleEditor] = useState(false);
  const [isModalDisplayed, toggleModal] = useState(false);
  const [modalId, setModalId] = useState(null);

  return (
    <div>
      {modalId ? (
        <Modal modalId={modalId} setModalId={setModalId} />
      ) : (
        <>
          <Header toggleEditor={toggleEditor} />
          {isEditorDisplayed ? (
            <Editor onPostAdded={onPostAdded}/>
          ) : (
            <Main posts={notes} setModalId={setModalId} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
