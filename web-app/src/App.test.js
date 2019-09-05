import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './components/Dashboard';

let btn = document.querySelectorAll('button');

console.log(btn);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('contains home touchdown button', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/home-touchdown/i);
});