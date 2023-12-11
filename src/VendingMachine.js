import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div className="vending-machine">
    <h1>Hello, I am a vending machine. What would you like to eat?</h1>
    <Link to="/soda" className="snack-link">Soda</Link>
    <Link to="/chips" className="snack-link">Chips</Link>
    <Link to="/candy" className="snack-link">Candy</Link>
    </div>
    );
}

export default VendingMachine;
