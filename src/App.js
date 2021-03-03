import { useState } from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Modal from "./Modal.js";
import Editor from "./Editor.js";
import { posts } from "./data";

import "./App.css";

function App() {
  const [notes, setNotes] = useState(posts);
  const [searchString, setSearchString] = useState("");
  const [searchMood, setSearchMood] = useState("");

  const onPostAdded = (newNote) => {
    setNotes({ ...notes, newNote });
  };

  const onChangeSearchString = (str) => {
    setSearchString(str);
  };

  const onChangeSearchMood = (mood) => {
    setSearchMood(mood);
  };

  const [isEditorDisplayed, toggleEditor] = useState(false);
  const [modalId, setModalId] = useState(null);

  return (
    <div>
      {modalId ? (
        <Modal modalId={modalId} setModalId={setModalId} />
      ) : (
        <>
          <Header
            onChangeSearchString={onChangeSearchString}
            onChangeSearchMood={onChangeSearchMood}
            searchString={searchString}
            searchMood={searchMood}
            toggleEditor={toggleEditor}
          />
          {isEditorDisplayed ? (
            <Editor onPostAdded={onPostAdded} />
          ) : (
            <Main
              posts={notes}
              searchString={searchString}
              searchMood={searchMood}
              setModalId={setModalId}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
