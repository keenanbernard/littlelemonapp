import React, {useRef} from 'react';
import './Navigation.css';
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";

const Navigation = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="navBar">
      <a className="logo" href="/"><img src="https://ik.imagekit.io/Bernard98/Little%20Lemon%20Assets/Logo.svg?updatedAt=1691705192811" alt="Little Lemon Logo"/></a>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/bookings">Reservation</Link>
        <Link to="/">Order Online</Link>
        <Link to="/">Login</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navigation;
