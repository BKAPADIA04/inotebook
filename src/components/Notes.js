import React,{useContext} from 'react'
import NoteContext from "../context/note/NoteContext";
import NotesItem from './NotesItem';

export default function Notes() {
    const context = useContext(NoteContext);
    //eslint-disable-next-line
    const { notes, setNotes } = context;
  return (
    <>
        <div className="row">
            {notes.map((note,index) => {
                return <NotesItem key = {index} note = {note} />
            })}
        </div>
    </>
  )
}
