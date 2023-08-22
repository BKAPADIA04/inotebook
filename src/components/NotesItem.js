import React from "react";

export default function NotesItem(props) {
  const { note } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title mx-2">{note.title}</h5>
          <p className="card-text mx-2">{note.description}</p>
          <i className="fa-solid fa-trash mx-2"></i>
          <i className="fa-solid fa-pen mx-2"></i>
          </div>
      </div>
    </div>
  );
}
