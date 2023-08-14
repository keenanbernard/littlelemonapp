import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Sections/Header/Header";
import LandingPage from "./components/Pages/LandingPage/LandingPage";

export const router = createBrowserRouter([

  {
    path: '/',
    element: <Header />,
    children: [
      { index: true, element: <LandingPage /> }
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
