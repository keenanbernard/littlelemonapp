import React from "react";
import "./Footer.css"
import {SocialIcon} from "react-social-icons";

const Footer = () =>{

  return(
    <footer>
      <div className="LL-Footer-Row">
        <section className="LL-Footer-Logo">
          <img src="https://ik.imagekit.io/Bernard98/Little%20Lemon%20Assets/Logo.svg?updatedAt=1691705192811" alt="Little Lemon Logo"/>
        </section>
        <section>
          <p>Opening Hours</p>
          <article className="LL-Footer-Nav">
            <p>Monday - Friday</p>
            <p>Lunch: 11:45am - 1:15pm</p>
            <p>Dinner: 5pm - 9:30pm</p>
          </article>
        </section>
        <section>
          <p>Contact</p>
          <article>
            <p>2548 Matthews Street, Chicago, Illinois - 60631</p>
            <p>815-582-5830</p>
            <p>contact@littlelemon.com</p>
          </article>
        </section>
        <section>
          <p>Social Media</p>
          <article className="LL-Footer-Icons">
            <SocialIcon className="LL-Footer-Icon" url="https://www.facebook.com/littlelemonchef/" />
            <SocialIcon className="LL-Footer-Icon" url="https://www.instagram.com/littlelemonfood/" />
            <SocialIcon className="LL-Footer-Icon" url="https://twitter.com/littlelemonrhw" />
          </article>
        </section>
      </div>
      <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
    </footer>
  )
}

export default Footer;