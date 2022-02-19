import { Note } from "@mui/icons-material";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  if (!activeNote) {
    return <div className="no-active-note">No note</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autofocus
        />
        <textarea
          id="body"
          value={activeNote.body}
          placeholder="write your note here ..."
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title"> {activeNote.title} </h1>
        <div className="markdown-preview"> {activeNote.body} </div>
      </div>
    </div>
  );
};

export default Main;

// atuofocus automatically focus on this element
//-> we want the <input type="text" id="title" autofocus /> update the
// current active note
// ->       ...activeNote,
//spread all the keys from activeNote and add them and we modify the one we want with [key]:value
