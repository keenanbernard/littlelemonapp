import './About.css';
import {Stack} from "./Stack/Stack";
import {useLocation} from "react-router-dom";
import Location from "../Location/Location";

export const About = ({data}) => {

  const location = useLocation();
  const currentPage = location.pathname;
  const text = `Welcome to Little Lemon, where Mediterranean flavors come to life!\n\nAt Little Lemon, we are passionate about bringing the vibrant and diverse culinary traditions of the Mediterranean to your plate. Our restaurant is a celebration of the rich cultural tapestry that spans countries from Greece to Morocco, and everywhere in between.\n\nOur Story:\nFounded with a vision to offer an authentic Mediterranean dining experience, Little Lemon is the result of a journey fueled by our love for exceptional food. Drawing inspiration from the sun-kissed shores, aromatic spices, and wholesome ingredients of the Mediterranean region, we've crafted a menu that transports you to this enchanting part of the world with every bite.\n\nOur Cuisine:\nOur menu is a tribute to the time-honored recipes and cooking techniques that have been perfected over generations. From the savory flavors of grilled kebabs and mezze platters to the refreshing zest of citrus-infused salads, each dish at Little Lemon tells a story of the Mediterranean's culinary heritage. We take pride in sourcing the freshest local ingredients and blending them with authentic spices to create a harmonious symphony of tastes that dance on your palate.\n\nOur Ambience:\nStep into our warm and welcoming space, reminiscent of a Mediterranean village taverna, and feel the embrace of the region's hospitality. With rustic touches and soothing colors that reflect the azure waters of the Mediterranean, our ambiance invites you to unwind and savor every moment.\n\nOur Promise:\nAt Little Lemon, we're not just about food – we're about crafting an experience that nourishes both body and soul. Whether you're sharing a meal with loved ones, enjoying a night out with friends, or seeking a culinary adventure, we're here to provide you with a little taste of the Mediterranean's magic.\n\nJoin us at Little Lemon and embark on a gastronomic journey that celebrates the essence of the Mediterranean. Let us be your passport to a world of flavors that are both timeless and unforgettable.\n\nExperience the Mediterranean, right here at Little Lemon.`;
  const paragraphs = text.split('\n\n');

  return (
    <section id="about">
      <Stack className="about-columns" justify="space-between">
        <Stack.Item
          className="about-left-column"
          vertical
          gap="2.25rem"
          basis="50%"
        >
          <Stack.Item vertical>
            <header className="aboutTitle">Little Lemon</header>
            <p className="aboutSubTitle">Chicago</p>
          </Stack.Item>

          { currentPage === '/' ?

          <p className="aboutDetails">
            Welcome to Little Lemon, where Mediterranean flavors come to life! At Little Lemon, we are passionate about bringing the vibrant and diverse culinary traditions of the Mediterranean to your plate. Our restaurant is a celebration of the rich cultural tapestry that spans countries from Greece to Morocco, and everywhere in between.
          </p>
            :
            <div className="paragraphs-container">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="paragraph">{paragraph}</p>
              ))}
              <Location />
            </div>
          }
        </Stack.Item>

        <section className="about-right-column">
          <section id="about-images">
            {data.map(({ id, image, alt, divID }) => (
              <div id={divID} key={id} tabIndex={id}>
                <img
                  src={image}
                  alt={alt}
                />
              </div>
            ))}
          </section>
        </section>
      </Stack>
    </section>
  );
};
