import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';

jest.mock('../../components/Banner/Banner', () => () => <div data-testid="banner" />);
jest.mock('../../components/CarFinder/CarFinder', () => () => <div data-testid="car-finder" />);
jest.mock('./components/ReviewsPanel/ReviewsPanel', () => ({ reviews }) => (
  <div data-testid="reviews-panel">
    {reviews.map((review) => (
      <div key={review.id}>{review.comment}</div>
    ))}
  </div>
));
jest.mock('../../helpers/request', () => ({
  get: jest.fn(),
}));

describe('HomePage', () => {
  test('renders HomePage with proper content', async () => {

    const mockReviews = [
      { id: 1, comment: 'Great car!' },
      { id: 2, comment: 'Excellent service!' },
    ];

    jest.spyOn(require('../../helpers/request'), 'get').mockResolvedValue({ data: mockReviews });

    render(<HomePage />);

    await screen.findByTestId('reviews-panel');

    expect(screen.getByTestId('banner')).toBeInTheDocument();
    expect(screen.getByTestId('car-finder')).toBeInTheDocument();
    expect(screen.getByTestId('reviews-panel')).toBeInTheDocument();


    expect(screen.getByText('Great car!')).toBeInTheDocument();
    expect(screen.getByText('Excellent service!')).toBeInTheDocument();
  });
});
