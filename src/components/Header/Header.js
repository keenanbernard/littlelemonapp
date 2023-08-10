import React from "react";
import {Outlet} from "react-router-dom";
import Nav from "../Nav/Nav";

const Header = () =>{


  return(
    <>
      <Nav />
      <Outlet />
    </>
  )
}

export default Header;