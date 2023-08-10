import './Specials.css';
import {Card} from "./Card/Card";

export const Specials = ({ data, itemWidth }) => {
  return (
    <section id="specials" className="LL-Specials">
      <section className="specials-titlebar">
        <header>This Weeks Specials</header>
        <button>Online Menu</button>
      </section>

      <section id="LL-Section-SpecialItems">
        {data.map(({ id, title, price, description, image }) => (
          <Card key={id} title={title} width={itemWidth} image={image}>
            <div className="LL-CardHeader card-variant-food">
              <header className="food-title">
                {title}
              </header>
              <p className="food-price">${price}</p>
            </div>
            <div className="food-desc">{description}</div>

            <div className="card-footer LL-OrderButton">
              <p className="p-order p-order2">Order for delivery</p>
            </div>
          </Card>
        ))}
      </section>
    </section>
  );
};
