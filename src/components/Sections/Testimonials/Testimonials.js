
import './Testimonials.css';
import {Cards} from "../../Shared/Cards/Cards";
import {ReviewStar} from "./ReviewStar/ReviewStar";

export const Testimonials = ({ data }) => {
  return (
    <section id="testimonials" className="LL-Testimonials">
      <header className="LL-Testimonials-Header">
        Testimonials
      </header>
      <section className="LL-Testimonials-Carousel">
        {data.map(({ id, rating, name, review, image }) => (
          <Cards
            key={`testimonial-card-${name.trim()}-${id}`}
            title={`Testimonial by ${name}`}
            imagePosition="left"
            image={image}
          >
            <header className="LL-Testimonial-Name">
              {name}
            </header>
            <div className="LL-Testimonial-Rating flex">
              {Array.from(
                { length: Math.round(Math.abs(Number(rating))) },
                (v, i) => (
                  <ReviewStar key={`reviewstar-${name.trim()}-${i}`} />
                )
              )}
            </div>
            <p className="LL-Testimonial-Review">{review}</p>
          </Cards>
        ))}
      </section>
    </section>
  );
};