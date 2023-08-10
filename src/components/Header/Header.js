import React from "react";
import {Outlet} from "react-router-dom";
import Nav from "../Nav/Nav";

const Header = (props) =>{


  return(
    <header>
      <Nav />
      <Outlet />
    </header>
  )
}

export default Header;