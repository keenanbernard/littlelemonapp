import React from 'react';
import './Nav.css';
import logo from "../../images/Logo.svg";

function Nav() {
  return (
    <nav id="navbar" className="">
      <div className="nav-wrapper">
        <div className="logo">
          <a href="#home"><img src={logo} alt="Little Lemon Logo" style={{width: "180px", height: 'auto'}}/></a>
        </div>
        <ul id="menu">
          <ol><a href="/">Home</a></ol>
          <ol><a href="/about">About</a></ol>
          <ol><a href="/menu">Menu</a></ol>
          <ol><a href="/reservation">Reservation</a></ol>
          <ol><a href="/orders">Order Online</a></ol>
          <ol><a href="/login">Login</a></ol>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
