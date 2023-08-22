import React, { useContext, useState } from "react";
import NoteContext from "../context/note/NoteContext";
export default function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleChange = (event) => {
    setNote({...note,[event.target.name]: event.target.value});
  };

  const handleClick = (event) => {
    event.preventDefault();
    addNote(note.title,note.description,note.tag);
    const form = document.getElementById('form_addNote');
    form.reset();
  };

  return (
    <div className="container my-3">
      <h2>Add A Note</h2>
      <form id = "form_addNote" className="my-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            autoComplete="off"
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
            name="description"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            autoComplete="off"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Tag
          </label>
          <input
            type="text"
            name="tag"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            autoComplete="off"
          ></input>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="reset" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
}
