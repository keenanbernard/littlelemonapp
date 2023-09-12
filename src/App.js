import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Sections/Header/Header";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import BookingPage from "./components/Pages/BookingsPage/BookingPage";
import MenuPage from "./components/Pages/MenuPage/MenuPage";
import 'react-notifications/lib/notifications.css';
import AboutPage from "./components/Pages/AboutPage/AboutPage";
import Confirmation from "./components/Pages/Confirmation/Confirmation";


export const router = createBrowserRouter([

  {
    path: '/',
    element: <Header />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: '/bookings', element: <BookingPage /> },
      { path: '/menu', element: <MenuPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/confirmation', element: <Confirmation /> },
      { path: '/cancellation', element: <Confirmation /> },
    ],
  },
]);

const App = () => {
  return (
    <div data-testid="App" className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
