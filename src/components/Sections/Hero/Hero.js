import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Hero.css"
const Hero =()=> {
  const navigate = useNavigate();

  return (
    <section className="LL-Hero">
      <div className="LL-Hero-left">
        <header className="displayTitle">
          Little Lemon
        </header>
        <p className="subTitle">Chicago</p>
        <p className="LL-Hero-desc">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button
          aria-label="Reserve a Table"
          className="LL-Hero-btn"
          onClick={() => navigate('/bookings')}
        >
          Reserve a Table
        </button>
      </div>
      <div className="LL-Hero-right">
        <img
          src="https://ik.imagekit.io/Bernard98/Little%20Lemon%20Assets/restauranfood.jpg?updatedAt=1691705110896"
          alt="Little Lemon - Hero"
          className="hero"
        />
      </div>
    </section>
  );
}

export default Hero;
