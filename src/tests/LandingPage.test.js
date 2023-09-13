import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {useNavigate, useLocation} from "react-router-dom";
import LandingPage from "../components/Pages/LandingPage/LandingPage";
jest.mock('react-router-dom', () => ({
  __esModule: true,
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

// Mock window.scrollTo
window.scrollTo = jest.fn();

describe('Landing Page', () => {
  test('Render landing page and its components', () => {
    useLocation.mockReturnValue({ pathname: '/'});
    render(<LandingPage />)

    const heroElement = screen.getByTestId('LL-Hero');
    expect(heroElement).toBeInTheDocument();

    const specialsElement = screen.getByTestId('LL-Specials');
    expect(specialsElement).toBeInTheDocument();

    const testimonialElement = screen.getByTestId('LL-Testimonials');
    expect(testimonialElement).toBeInTheDocument();

    const aboutElement = screen.getByTestId('LL-About');
    expect(aboutElement).toBeInTheDocument();

    const footerElement = screen.getByTestId('LL-Footer');
    expect(footerElement).toBeInTheDocument();
  })

  test('Navigate to reservations', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({ pathname: '/'});

    render(<LandingPage />)
    const reserveButton = screen.getByTestId('reserveButton');
    fireEvent.click(reserveButton)
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/bookings')
  })

  test('Navigate to menu', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    useLocation.mockReturnValue({ pathname: '/'});

    render(<LandingPage />)
    const reserveButton = screen.getByTestId('menuButton');
    fireEvent.click(reserveButton)
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/menu')
  })
})
