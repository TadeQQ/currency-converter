import { render, screen } from '@testing-library/react';
import React from 'react';
import { Header } from './Header';

describe('Header tests', () => {
  beforeAll(() => {
    console.log('test');
  });

  it('render component', () => {
    render(<Header />);

    expect(
      screen.getByText('Welcome to your favorite currency converter')
    ).toBeInTheDocument();
  });

  it('check if H2 exist', () => {
    render(<Header />);

    expect(
      screen.getByText('Welcome to your favorite currency converter', {
        selector: 'h2',
      })
    ).toBeInTheDocument();
  });
});
