import React from 'react';
import { Link } from 'react-router-dom';

function Chips() {
  return (
    <div className="snack-component">
        <h1>You got Cheetos!</h1>
        <Link to="/" className="go-back-link">Go back</Link>
    </div>
  );
}

export default Chips;
