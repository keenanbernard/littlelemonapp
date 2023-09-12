import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MenuPage from "./MenuPage";

// Mock the react-router-dom's useNavigate function
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

// Mock window.scrollTo
window.scrollTo = jest.fn();

describe('MenuPage', function () {
  test('Render menu page', () =>{
    render(<MenuPage />);
    const menuPageElement = screen.getByTestId('menuPage')
    expect(menuPageElement).toBeInTheDocument();
  })

  test('Navigate to reservations', () =>{
    render(<MenuPage />);
    const reserveButton = screen.getByTestId('reserveButton');
    fireEvent.click(reserveButton);
    expect(reserveButton).toBeEnabled()
  })
});