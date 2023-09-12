import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingPage from './BookingPage';

// Mock the react-router-dom's useNavigate function
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('BookingPage', () => {
  // Test that the BookingPage component renders without errors.
  test('renders without errors', () => {
    render(<BookingPage />);
    const bookingPageElement = screen.getByTestId('bookingPage');
    expect(bookingPageElement).toBeInTheDocument();
  });

  // Test that the component correctly handles input changes.
  test('handles input changes', () => {
    render(<BookingPage />);

    const guestSelect = screen.getByTestId('guestSelection');
    fireEvent.change(guestSelect, { target: { value: '2' } });
    expect(guestSelect.value).toBe('2');

    const dateInput = screen.getByTestId('dateInput');
    fireEvent.change(dateInput, { target: { value: '2023-09-15T18:30' } });
    expect(dateInput.value).toBe('2023-09-15T18:30');

    const mobileInput = screen.getByTestId('mobileNumberInput');
    fireEvent.change(mobileInput, { target: { value: '6144297' } });
    expect(mobileInput.value).toBe('6144297');

    const emailInput = screen.getByTestId('emailInput');
    fireEvent.change(emailInput, { target: { value: 'k.bernard@gmail.com' } });
    expect(emailInput.value).toBe('k.bernard@gmail.com');

    const occasionSelect = screen.getByTestId('occasionSelect');
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    expect(occasionSelect.value).toBe('Birthday');
  });

  // Test validation of form inputs.
  test('validate form input', () => {
    render(<BookingPage />);
    const dateInput = screen.getByTestId('dateInput');
    fireEvent.blur(dateInput);
    expect(screen.getByText('Date is required.')).toBeInTheDocument();

    const mobileInput = screen.getByTestId('mobileNumberInput');
    fireEvent.blur(mobileInput);
    expect(screen.getByText('Phone number is required.')).toBeInTheDocument();

    const emailInput = screen.getByTestId('emailInput');
    fireEvent.blur(emailInput);
    expect(screen.getByText('Email is required.')).toBeInTheDocument();
  });

  // Test that the reserve button is disabled when inputs are invalid.
  test('disabled reserve button when inputs are invalid', () => {
    render(<BookingPage />);
    const dateInput = screen.getByTestId('dateInput');
    fireEvent.blur(dateInput);

    const mobileInput = screen.getByTestId('mobileNumberInput');
    fireEvent.change(mobileInput, { target: { value: '614429' } });

    const emailInput = screen.getByTestId('emailInput');
    fireEvent.change(emailInput, { target: { value: 'k.bernard' } });

    const reserveButton = screen.getByTestId('reserveButton');
    expect(reserveButton).toBeDisabled();
  });

  // Test that the reserve button is enabled when inputs are valid.
  test('enable reserve button when inputs are valid', () => {
    render(<BookingPage />);
    const dateInput = screen.getByTestId('dateInput');
    fireEvent.change(dateInput, { target: { value: '2023-10-15T18:30' } });

    const mobileInput = screen.getByTestId('mobileNumberInput');
    fireEvent.change(mobileInput, { target: { value: '6144297' } });

    const emailInput = screen.getByTestId('emailInput');
    fireEvent.change(emailInput, { target: { value: 'k.bernard@livedigi.com' } });

    const reserveButton = screen.getByTestId('reserveButton');
    expect(reserveButton).toBeEnabled();
  });
});
