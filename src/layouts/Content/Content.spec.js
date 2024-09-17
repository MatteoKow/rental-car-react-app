import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Content from './Content';

test('renders content for each route', () => {
  const routes = [
    '/',
    '/login',
    '/results/?startDate=30-12-2023&endDate=30-12-2023&startHour=13:00&endHour=14:00',
  ];

  routes.forEach((route) => {
    render(
      <MemoryRouter initialEntries={[route]} initialIndex={0}>
        <Content setIsLoggedIn={() => {}} />
      </MemoryRouter>
    );

    if (route === '/') {
      expect(screen.getByText('Znajdź swoje auto')).toBeInTheDocument();
    } else if (route === '/login') {
      expect(screen.getByText('Logowanie')).toBeInTheDocument();
    } else if (route === '/our-cars') {
      expect(screen.getByText('SUV')).toBeInTheDocument();
    } else if (route === '/results/?startDate=30-12-2023&endDate=30-12-2023&startHour=13:00&endHour=14:00') {
        expect(screen.getByText('Filtry')).toBeInTheDocument();
    }
     
  });
});
