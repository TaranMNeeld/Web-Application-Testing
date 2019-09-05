import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './components/Dashboard';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('the sum function sums two integers', () => {
  expect(sum(2, 2)).toBe(4);
  expect(sum(2, 3)).toBe(5);
});

test('contains home touchdown button', () => {
  const { getByName } = render(<App />);
  getByName('ball');
});

console.log(window);