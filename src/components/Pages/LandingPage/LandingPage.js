import React from "react";
import Hero from "../../Sections/Hero/Hero";
import Footer from "../../Sections/Footer/Footer";
import {Specials} from "../../Sections/Specials/Specials";
import {Testimonials} from "../../Sections/Testimonials/Testimonials";
import {About} from "../../Sections/About/About";
import specials from "../../Sections/Specials/specials.json";
import testimonials from "../../Sections/Testimonials/testimonials.json";
import about from "../../Sections/About/about.json";

const LandingPage = () =>{

  return(
    <>
      <Hero />
      <Specials data={specials} itemWidth="300px" />
      <Testimonials data={testimonials}/>
      <About data={about}/>
      <Footer />
    </>
  )
}

export default LandingPage;