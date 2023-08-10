import React from "react";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import {Specials} from "../Specials/Specials";
import specials from "../Specials/specials.json";

const LandingPage = () =>{

  return(
    <>
      <Main />
      <Specials data={specials} itemWidth="300px" />
      <Footer />
    </>
  )
}

export default LandingPage;