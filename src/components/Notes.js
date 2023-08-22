import React,{useContext} from 'react'
import NoteContext from "../context/note/NoteContext";
import NotesItem from './NotesItem';
import AddNote from './AddNote';

export default function Notes() {
    const context = useContext(NoteContext);
    //eslint-disable-next-line
    const { notes } = context;
  return (
    <>
      <AddNote />
        <div className="row mx-2">
          <h2>Your Notes</h2>
            {notes.map((note,index) => {
                return <NotesItem key = {index} note = {note} />
            })}
        </div>
    </>
  )
}
