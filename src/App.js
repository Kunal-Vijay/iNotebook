import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/noteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
