import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {useNavigate} from "react-router-dom";
import MenuPage from "../components/Pages/MenuPage/MenuPage";

// Mock the react-router-dom's useNavigate function
jest.mock('react-router-dom', () => ({
  __esModule: true,
  useNavigate: jest.fn(),
}));


// Mock window.scrollTo
window.scrollTo = jest.fn();

describe('MenuPage', function () {
  test('Render menu page', () =>{
    render(<MenuPage />);
    const menuPageElement = screen.getByTestId('menuPage')
    expect(menuPageElement).toBeInTheDocument();
  })

  test('Navigate to reservations', () => {
    const navigate = jest.fn(); // Create a mock function for navigate
    useNavigate.mockReturnValue(navigate); // Mock useNavigate to return the navigate mock function

    render(<MenuPage />);
    const reserveButton = screen.getByTestId('reserveButton');
    fireEvent.click(reserveButton);

    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/bookings');
  });
});