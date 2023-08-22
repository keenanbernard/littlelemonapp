import React from "react"
import {About} from "../../Sections/About/About";
import about from "../../Sections/About/about.json";
const AboutPage = () => {

  return(
    <>
      <About data={about}/>
    </>
  )
}

export default AboutPage;