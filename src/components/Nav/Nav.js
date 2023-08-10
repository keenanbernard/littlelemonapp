import React, {useRef} from 'react';
import './Nav.css';
import logo from "../../images/Logo.svg";
import {FaBars, FaTimes} from "react-icons/fa";

const Nav = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="navBar">
      <a className="logo" href="/"><img src={logo} alt="Little Lemon Logo"/></a>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/menu">Menu</a>
        <a href="/reservation">Reservation</a>
        <a href="/orders">Order Online</a>
        <a href="/login">Login</a>
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

export default Nav;
