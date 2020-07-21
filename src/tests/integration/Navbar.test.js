import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);

    expect(screen.getByText('Worthy Work')).toBeInTheDocument();
    //screen.debug()
  });
});
