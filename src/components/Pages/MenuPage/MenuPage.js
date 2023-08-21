import React, {useEffect} from "react";
import "./MenuPage.css"
import specials from "./menu.json"
import {useNavigate} from "react-router-dom";

const MenuPage = () =>{
  const navigate = useNavigate();
  useEffect(() =>{
    window.scrollTo(0, 0); // Scroll to the top of the page
  })

  return(
    <section id="menu" className="LL-Menu">
      <section className="menu-titlebar">
        <header>seasonal, contemporary, mediterranean</header>
      </section>

      <section className="LL-Reservations">
        <p className="LL-Reservations-1">Reservations</p>
        <p className="LL-Reservations-2">Book your table online.</p>
        <button onClick={() => navigate('/bookings')}>reserve</button>
      </section>

      {specials.map(({id, title, price, description, image}) => (
        <section key={id} className="LL-Menu-Item">
          <div className="LL-Item-Left">
            <header className="LL-Item-Title">{title}</header>
            <img src={image} alt="Dish"/>
          </div>
          <div className="LL-Item-Right">
            <p className="LL-Item-Price">{price}</p>
            <div className="LL-Item-Desc">{description}</div>
          </div>
        </section>
      ))}
    </section>
  )
}

export default MenuPage;