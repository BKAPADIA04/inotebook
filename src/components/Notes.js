import React, { useState, useContext, useEffect, useRef } from "react";
import NoteContext from "../context/note/NoteContext";
import NotesItem from "./NotesItem";
import AddNote from "./AddNote";

export default function Notes(props) {
  const context = useContext(NoteContext);
  const { notes, getNotes ,editNote} = context;

  const [note, setNote] = useState({ id:"",etitle:"", edescription: "", etag: "" });


  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    event.target.name = event.target.value;
    console.log("Updating the note ...",note);
    editNote(note.id,note.etitle,note.edescription,note.etag);
    props.showAlert("Note Updated Successfully","success");
    refClose.current.click();
  };

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    // console.log(currentNote._id);
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  };

  useEffect(() => {
    getNotes();
  });
  // console.log(note);
  // console.log(notes);

  return (
    <>
      <AddNote showAlert = {props.showAlert}/>

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Update
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Update Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form id="form_addNote" className="my-3 mx-2">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="etitle"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  autoComplete="off"
                  value={note.etitle}
                  minLength={3}
                  required
                ></input>
                {/*<div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
  </div>*/}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  name="edescription"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={handleChange}
                  autoComplete="off"
                  value={note.edescription}
                  minLength={5}
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Tag
                </label>
                <input
                  type="text"
                  name="etag"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={handleChange}
                  autoComplete="off"
                  value={note.etag}
                  minLength={3}
                  required
                ></input>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref = {refClose}
                >
                  Close
                </button>
                <button disabled={note.etitle.length < 3 || note.edescription.length < 5 || note.etag.length < 3} type="reset" className="btn btn-primary" onClick={handleClick}>
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row mx-2">
        <h2>Your Notes</h2>
        <div className="container">
          {notes.length === 0 && 'No Notes To Display'}
        </div>
        {notes.map((note, index) => {
          return <NotesItem showAlert = {props.showAlert} key={index} updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  );
}
