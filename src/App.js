import "./App.css";
// import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/note/NoteState";
import Alert from "./components/Alert";
import About from "./components/About";
// import AddNote from "./components/AddNote";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message = "This is iNoteBook"/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
