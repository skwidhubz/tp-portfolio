import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Projects from './Components/Projects';
import Navigation from './Components/Nav';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Contact from './Components/Contact';


function App() {
  return (
    <>
    <Navigation />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
