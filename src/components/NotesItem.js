import React, { useContext } from "react";
import NoteContext from "../context/note/NoteContext";


export default function NotesItem(props) {
  const { note } = props;
  const { deleteNote,editNote } = useContext(NoteContext);

  const deleteNoteLocal = () => {
    // console.log(note._id);
    deleteNote(note._id);
  }
  const editNoteLocal = (title,description,tag) => {
    // console.log("edit");
    editNote(note._id,title,description,tag);
  }

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title mx-2">{note.title}</h5>
          <p className="card-text mx-2">{note.description}</p>
          <i className="fa-solid fa-trash mx-2" onClick={deleteNoteLocal}></i>
          <i className="fa-solid fa-pen mx-2" onClick={editNoteLocal}></i>
          </div>
      </div>
    </div>
  );
}
