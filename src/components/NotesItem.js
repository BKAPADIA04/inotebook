import React, { useContext } from "react";
import NoteContext from "../context/note/NoteContext";


export default function NotesItem(props) {
  const { note } = props;
  const { deleteNote } = useContext(NoteContext);

  const deleteNoteLocal = () => {
    deleteNote(note._id);
  }

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title mx-2">{note.title}</h5>
          <p className="card-text mx-2">{note.description}</p>
          <i className="fa-solid fa-trash mx-2" onClick={deleteNoteLocal}></i>
          <i className="fa-solid fa-pen mx-2"></i>
          </div>
      </div>
    </div>
  );
}
