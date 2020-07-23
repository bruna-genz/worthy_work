import React from 'react';
import { render, screen } from '../helpers/test-utils';
import '@testing-library/jest-dom/extend-expect';
import JobsList from '../../containers/JobsList';

test('can render with redux with defaults', () => {
  render(<JobsList />);
  expect(screen.queryByText('Find a job in the humanitarian field')).toBeInTheDocument();
});

test('renders select input and default option "All"', () => {
  render(<JobsList />);
  expect(screen.getByRole('combobox')).toBeInTheDocument();
  expect(screen.getByRole('option').value).toBe('All');
});
