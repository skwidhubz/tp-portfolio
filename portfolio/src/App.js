import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Nav from './Components/Nav';
import Projects from './Components/Projects';

function App() {
  return (
    <>
    <Nav />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
