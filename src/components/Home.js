import React from "react";
// import NoteContext from "../context/note/NoteContext";
import Notes from "./Notes";

export default function Home() {
  // const context = useContext(NoteContext);
  // const { notes, setNotes } = context;
  // console.log(typeof(notes));
  // console.log(context.notes);

  return (
    <>
      <Notes/>
    </>
  );
}
