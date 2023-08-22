import React, { useEffect, useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:8080/";

  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    //API Call
    const url = `${host}api/notes/fetchAllNotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYzljYzc2YWIzNWIxOThhODZmNzQ3In0sImlhdCI6MTY5MjY4NTM4Nn0.5qWfcCVWeUSLhtIe_YsrBDlXyiazmtPMRxWmYPjZzTk",
      },
    });
    const data = await response.json();
    setNotes(data);
  };

  const addNote = async (title, description, tag) => {
    //API Call
    const url = `${host}api/notes/insertNote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYzljYzc2YWIzNWIxOThhODZmNzQ3In0sImlhdCI6MTY5MjY4NTM4Nn0.5qWfcCVWeUSLhtIe_YsrBDlXyiazmtPMRxWmYPjZzTk",
      },
      body: { title, description, tag }, // body data type must match "Content-Type" header
    });
    const data = await response.json(); // parses JSON response into native JavaScript objects
    console.log(data);
    let note = {
      title: title,
      description: description,
      tag: tag,
    };
    setNotes(notes.concat(note));
  };

  const deleteNote = async (id) => {
    //API Call
    const url = `${host}api/notes/deleteNote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYzljYzc2YWIzNWIxOThhODZmNzQ3In0sImlhdCI6MTY5MjY4NTM4Nn0.5qWfcCVWeUSLhtIe_YsrBDlXyiazmtPMRxWmYPjZzTk",
      },
    });
    const data = await response.json(); // parses JSON response into native JavaScript objects
    console.log(data);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  const editNote = async (id, title, description, tag) => {
    //API Call
    const url = `${host}api/notes/updateNote/${id}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYzljYzc2YWIzNWIxOThhODZmNzQ3In0sImlhdCI6MTY5MjY4NTM4Nn0.5qWfcCVWeUSLhtIe_YsrBDlXyiazmtPMRxWmYPjZzTk",
      },
      body: { title, description, tag }, // body data type must match "Content-Type" header
    });
    const data = await response.json(); // parses JSON response into native JavaScript objects
    console.log(data);

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
