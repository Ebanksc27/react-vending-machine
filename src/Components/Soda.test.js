import React from 'react';
import renderer from 'react-test-renderer';
import Soda from './Components/Soda';
import { BrowserRouter } from 'react-router-dom';

it('Soda renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Soda />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});


