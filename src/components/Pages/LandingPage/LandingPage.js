import React from "react";
import Hero from "../../Sections/Main/Hero";
import Footer from "../../Sections/Footer/Footer";
import {Specials} from "../../Sections/Specials/Specials";
import specials from "../../Sections/Specials/specials.json";
import testimonials from "../../Sections/Testimonials/testimonials.json";
import {Testimonials} from "../../Sections/Testimonials/Testimonials";
import {About} from "../../Sections/About/About";

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