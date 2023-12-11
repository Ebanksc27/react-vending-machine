import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Soda from './Components/Soda';
import Chips from './Components/Chips';
import Candy from './Components/Candy';
import { BrowserRouter } from 'react-router-dom';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
});

it('Soda renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Soda />, div);
});

it('Chips renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chips />, div);
});

it('Candy renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Candy />, div);
});
