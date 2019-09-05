import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the dashboard component', () => {
  const dashboard = render(<Dashboard />)
  expect(dashboard.firstChild).toMatchSnapshot()
 })

 it('renders the display component', () => {
  const display = render(<Display />)
  expect(display.firstChild).toMatchSnapshot()
 })

//  it('there are 4 buttons', () => {
//    const buttons = window.querySelectorAll('button');
//   expect(buttons.length).toBe(4)
//  })
 