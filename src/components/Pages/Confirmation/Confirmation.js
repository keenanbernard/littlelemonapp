import React, {useEffect, useRef} from "react";
import "./Confirmation.css"
import {useLocation} from "react-router-dom";

const Confirmation = () =>{
  const bannerRef = useRef(null);
  const location = useLocation();
  const currentPage = location.pathname;

  useEffect(() =>{
    window.scrollTo(0, 0); // Scroll to the top of the page
  })

  return(
    <section data-testid="confirmationPage" ref={bannerRef} className="LL-Confirmations-Page">
      { currentPage === '/confirmation' ?
        <>
      <header data-testid="confirmation" className="LL-Confirmations-Title">Reservation confirmed!</header>
      <p className="LL-Confirmations">We are pleased to inform you that your reservation request has been received and confirmed.</p>
      <p className="LL-Confirmations">Thank you for choosing the Little Lemon!</p>
      </>
        :
        <>
        <header data-testid="cancellation" className="LL-Confirmations-Title">Reservation cancelled!</header>
        <p className="LL-Confirmations">Your reservation has been cancelled.</p>
        </>
      }
    </section>
  )
}

export default Confirmation;