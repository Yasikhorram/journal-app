const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>NOTES</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && `active`}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>Delete</button>
            </div>
            <p> {note.body && note.body.substr(0, 100) + "..."} </p>
            <small className="note-meta">
              Last Modified [{new Date().toLocaleDateString()}{" "}
              {new Date().toLocaleTimeString()}]
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

// Explanation:
// -> note is an obj because our notes state is an arr of objs
// -> We dont want to show the whole body <p>{note.body}</p> So we do conditional
//rendering. So if theres a note.body do this othrwise do nothin and we write it with
//&& <p> {note.body && note.body.substr(0, 100) + "..."} </p>
// -> note.lastModified to make this readable we use new Date()
// remember when we call a func with an argument we should write it in an arrow func to not to automatically get called
// -> for dynamic class name which we can static and non static classes using this technic
//className={`app-sidebar-note ${note.id === activeNote && `active`}`}
// --> We want to slide up our note as soon as we update it. So recent updated notes moves up and
// I did it by modifying our notes arr via sort function
//   const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
