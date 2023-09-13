import React from 'react';
import { render, screen } from '@testing-library/react';
import {useLocation} from "react-router-dom";
import about from "../components/Sections/About/about.json";
import {About} from "../components/Sections/About/About";

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useLocation: jest.fn(),
}));

// Mock window.scrollTo
window.scrollTo = jest.fn();

describe('About Page', () => {
  test(`Render home's about page`, () =>{
    useLocation.mockReturnValue({ pathname: '/'});
    render(<About data={about} />);
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
  })

  test(`Render about page`, () =>{
    useLocation.mockReturnValue({ pathname: '/about'});
    render(<About data={about} />);
    const aboutElement = screen.getByTestId('about');
    expect(aboutElement).toBeInTheDocument();
  })
})