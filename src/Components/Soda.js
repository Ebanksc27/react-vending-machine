import React from 'react';
import { Link } from 'react-router-dom';

function Soda() {
  return (
    <div className="snack-component">
        <h1>You got Fanta Orange with Zero Sugar... ew!</h1>
        <Link to="/" className="go-back-link">Go back</Link>
    </div>
  );
}

export default Soda;
