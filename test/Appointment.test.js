import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment'

describe('Appointment', () => {
  it('renders a customer name first', () => {
    const customer = { firstName: 'Ashley' };
    const container = document.createElement('div');
    document.body.appendChild(container);

    ReactDOM.render(
      <Appointment customer={customer} />,
      container
    );

    expect(container.textContent).toMatch('Ashley');
  });

  it('renders another customer name first', () => {
    const customer = { firstName: 'Jordan' };
    const container = document.createElement('div');
    document.body.appendChild(container);

    ReactDOM.render(
      <Appointment customer={customer} />,
      container
    );

    expect(container.textContent).toMatch('Jordan');
  });
});
