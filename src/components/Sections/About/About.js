import './About.css';
import {Stack} from "./Stack/Stack";

export const About = () => {
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

          <p className="aboutDetails">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum aliquet massa, ut consequat tortor varius eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum aliquet massa, ut consequat tortor varius eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum aliquet massa, ut consequat tortor varius eu.
          </p>
        </Stack.Item>

        <section className="about-right-column">
          <section id="about-images">
            <div id="about-first-image">
              <img
                src="https://ik.imagekit.io/Bernard98/Little%20Lemon%20Assets/Mario%20and%20Adrian%20b.jpg?updatedAt=1691705199187"
                alt="Little Lemon - Burritos"
              />
            </div>
            <div id="about-second-image">
              <img
                src="https://ik.imagekit.io/Bernard98/Little%20Lemon%20Assets/little-lemon-pastas_-BfcomSI5.webp?updatedAt=1691727561596"
                alt="Little Lemon - Pastas"
              />
            </div>
          </section>
        </section>
      </Stack>
    </section>
  );
};
