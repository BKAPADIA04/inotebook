import React from "react";
// import NoteContext from "../context/note/NoteContext";
import Notes from "./Notes";

export default function Home(props) {
  // const context = useContext(NoteContext);
  // const { notes, setNotes } = context;
  // console.log(typeof(notes));
  // console.log(context.notes);
  const {showAlert} = props;
  return (
    <>
      <Notes showAlert = {showAlert}/>
    </>
  );
}
