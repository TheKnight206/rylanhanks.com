import { render, screen } from '@testing-library/react';
import LandingPage from '../pages/Landing-Page';

test('renders learn react link', () => {
  render(<LandingPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
