// App.js
// Bhuvaneshwari Sivasangaran - 8882803

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Timer from './components/Timer';
import Contact from './components/Contact';
import "./styles/styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
