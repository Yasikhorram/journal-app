import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <div className="App">
      <Sidebar notes={notes} />
      <Main />
    </div>
  );
}

export default App;
