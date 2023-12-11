import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Components/Soda';
import Chips from './Components/Chips';
import Candy from './Components/Candy';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/candy" element={<Candy />} />
      </Routes>
    </Router>
  );
}

export default App;
