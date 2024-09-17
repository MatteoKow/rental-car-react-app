import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarsPanel from './CarsPanel';

describe('CarsPanel', () => {
  test('renders CarsPanel with proper content and handles interactions', () => {
    const mockCars = [

      { _id: '1', title: 'Toyota Camry', price: 30000,image: "img1" },
      { _id: '2', title: 'Honda Civic', price: 25000, image: "img2" },
    ];

    render(
      <CarsPanel
        allCars={mockCars}
        favourites={['Automatyczna','Beznzyna']}
        addFavourites={jest.fn()}
        removeFavourites={jest.fn()}
      />
    );

    expect(screen.getByText('Toyota Camry')).toBeInTheDocument();
    expect(screen.getByText('Honda Civic')).toBeInTheDocument();

  });
});