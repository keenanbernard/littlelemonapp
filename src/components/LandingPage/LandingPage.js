import React from "react";
import Hero from "./Main/Hero";
import Footer from "../Footer/Footer";
import {Specials} from "./Specials/Specials";
import specials from "./Specials/specials.json";
import testimonials from "./Testimonials/testimonials.json";
import {Testimonials} from "./Testimonials/Testimonials";
import {About} from "./About/About";

const LandingPage = () =>{

  return(
    <>
      <Hero />
      <Specials data={specials} itemWidth="300px" />
      <Testimonials data={testimonials}/>
      <About />
      <Footer />
    </>
  )
}

export default LandingPage;