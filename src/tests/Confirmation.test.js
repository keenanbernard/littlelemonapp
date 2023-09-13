import React from 'react';
import { render, screen } from '@testing-library/react';
import Confirmation from "../components/Pages/Confirmation/Confirmation";
import {useLocation} from "react-router-dom";

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useLocation: jest.fn(),
}));

// Mock window.scrollTo
window.scrollTo = jest.fn();

describe('Confirmation Page', () => {
  test('Render confirmation page notice', () =>{
    useLocation.mockReturnValue({ pathname: '/confirmation' });

    render(<Confirmation />)

    const confirmationPageElement = screen.getByTestId('confirmationPage')
    const confirmationElement = screen.getByTestId('confirmation')
    expect(confirmationPageElement).toBeInTheDocument();
    expect(confirmationElement).toBeInTheDocument();
  })

  test('Render cancellation page notice', () => {
    useLocation.mockReturnValue({pathname: '/cancellation'});

    render(<Confirmation />)
    const confirmationPageElement = screen.getByTestId('confirmationPage');
    const cancellationElement = screen.getByTestId('cancellation');
    expect(confirmationPageElement).toBeInTheDocument();
    expect(cancellationElement).toBeInTheDocument();
  })
})