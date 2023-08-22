import React , { useContext } from 'react'
import NoteContext from '../context/note/NoteContext';

export default function About() {
    // eslint-disable-next-line
  const a = useContext(NoteContext);
  return (
    <div className="container my-3">
      <h2>My name is about</h2>
    </div>
  )
}
