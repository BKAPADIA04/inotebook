import React , { useContext, useEffect } from 'react'
import NoteContext from '../context/note/NoteContext';

export default function About() {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    //eslint-disable-next-line
  },[])
  return (
    <div>
      <h1>My name is {a.state.name} {a.state.surname}</h1>
    </div>
  )
}
