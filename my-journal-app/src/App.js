import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState, useEffect } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    //this returns the obj of current active note
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNoteArr = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNoteArr);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;

// -> we want to pass current active note to Main but cant send it like <Main activeNote={activeNote} /> because activeNote is just an id
//find() method return the first value which match from the
//collection and terminate so rest of the array is not process.
// getActiveNote() so we want it to run auto to always pass in the //active note => main component has access to the active current note
//activeNote={getActiveNote()}

// --> ** Making in our notes persist in local storage and not disappear by refreshing the page. for that we use Local storage. It is storage part of the browser where we can store key value pairs. So theres a big obj in browser storage. So we can save all our notes in the arr by turning them into str using JSON.stringify.
