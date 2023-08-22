import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "64e454ec6ed5cf37579ee94c",
            "user": "64dc9cc76ab35b198a86f747",
            "title": "Bhavya",
            "description": "Kapadia",
            "tag": "PRI",
            "timestamp": "2023-08-22T06:25:48.347Z",
            "__v": 0
        },
        {
            "_id": "64e454ef6ed5cf37579ee94e",
            "user": "64dc9cc76ab35b198a86f747",
            "title": "Rohit",
            "description": "Kapadia",
            "tag": "PRI",
            "timestamp": "2023-08-22T06:25:51.713Z",
            "__v": 0
        },
        {
            "_id": "64e454f06ed5cf37579ee950",
            "user": "64dc9cc76ab35b198a86f747",
            "title": "Virat",
            "description": "Kapadia",
            "tag": "PRI",
            "timestamp": "2023-08-22T06:25:52.448Z",
            "__v": 0
        },
        {
            "_id": "64e454f16ed5cf37579ee952",
            "user": "64dc9cc76ab35b198a86f747",
            "title": "Shreyas",
            "description": "Kapadia",
            "tag": "PRI",
            "timestamp": "2023-08-22T06:25:53.124Z",
            "__v": 0
        },
        {
            "_id": "64e454f16ed5cf37579ee954",
            "user": "64dc9cc76ab35b198a86f747",
            "title": "Rahul",
            "description": "Kapadia",
            "tag": "PRI",
            "timestamp": "2023-08-22T06:25:53.670Z",
            "__v": 0
        },
        {
            "_id": "64e454f26ed5cf37579ee956",
            "user": "64dc9cc76ab35b198a86f747",
            "title": "Bhavya",
            "description": "Kapadia",
            "tag": "PRI",
            "timestamp": "2023-08-22T06:25:54.157Z",
            "__v": 0
        },
        {
            "_id": "64e454f26ed5cf37579ee958",
            "user": "64dc9cc76ab35b198a86f747",
            "title": "Bhavya",
            "description": "Kapadia",
            "tag": "PRI",
            "timestamp": "2023-08-22T06:25:54.637Z",
            "__v": 0
        },
        {
            "_id": "64e454f36ed5cf37579ee95a",
            "user": "64dc9cc76ab35b198a86f747",
            "title": "Bhavya",
            "description": "Kapadia",
            "tag": "PRI",
            "timestamp": "2023-08-22T06:25:55.050Z",
            "__v": 0
        },
        {
            "_id": "64e454f36ed5cf37579ee95c",
            "user": "64dc9cc76ab35b198a86f747",
            "title": "Bhavya",
            "description": "Kapadia",
            "tag": "PRI",
            "timestamp": "2023-08-22T06:25:55.461Z",
            "__v": 0
        }
    ]
    
    const [notes,setNotes] = useState(notesInitial);
    
    const addNote = (title,description,tag) => {
        let note = {
           title : title,
           description: description,
           tag : tag
        };
        setNotes(notes.concat(note));
    }

    const deleteNote = (id) => {
        const newNote = notes.filter((note) => {return note._id !== id});
        setNotes(newNote);
    }

    const editNote = () => {

    }

    return (
        <NoteContext.Provider value = {{notes,setNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;

