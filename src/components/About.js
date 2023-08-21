import React , { useContext } from 'react'
import NoteContext from '../context/note/NoteContext';

export default function About() {
    // eslint-disable-next-line
  const a = useContext(NoteContext);
  return (
    <div>
      <h1>My name is about</h1>
    </div>
  )
}
