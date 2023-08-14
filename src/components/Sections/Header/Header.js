import React from "react";
import {Outlet} from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = () =>{


  return(
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default Header;