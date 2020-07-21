import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailedJob from '../../components/DetailedJob';

describe('DetailedJob', () => {
  const job = {
    title: 'Fake Title',
    company: 'Fake Company',
    date: {
      create: new Date(),
      closing: new Date(),
    },
    description: 'Fake description',
    apply: 'Fake application instructions',
    city: 'Paris',
    country: 'France',
    type: 'Fake job type',
    careerCategory: 'Fake career category',
    experience: 'Fake experience',
    url: 'https://www.google.com/',
  };

  test('renders DetailedJob component', () => {
    render(<DetailedJob job={job} />);
  });

  test('information is correctly displayed in the page', () => {
    render(<DetailedJob job={job} />);
    expect(screen.getByText('Fake Title')).toBeInTheDocument();
    expect(screen.getByText('Fake description')).toBeInTheDocument();
    expect(screen.getByText('Fake application instructions')).toBeInTheDocument();
  });

  test('render link to access original url', () => {
    render(<DetailedJob job={job} />);
    const link = screen.getByRole('link');
    expect(link.href).toBe('https://www.google.com/');
  });
});
