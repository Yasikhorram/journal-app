const Sidebar = ({ notes, onAddNote }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>NOTES</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className="app-sidebar-note">
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button>Delete</button>
            </div>
            <p> {note.body && note.body.substr(0, 100) + "..."} </p>
            <small className="note-meta">
              Last Modified [{new Date().toLocaleDateString()}]
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
