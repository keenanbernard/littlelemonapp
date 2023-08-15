import './About.css';
import {Stack} from "./Stack/Stack";

export const About = ({data}) => {
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
            {data.map(({ id, image, alt, divID }) => (
              <div id={divID} tabIndex={id}>
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
