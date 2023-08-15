import './Specials.css';
import {Cards} from "../../Shared/Cards/Cards";
import {useNavigate} from "react-router-dom";

export const Specials = ({ data, itemWidth }) => {
  const navigate = useNavigate();

  return (
    <section id="specials" className="LL-Specials">
      <section className="specials-titlebar">
        <header>This Weeks Specials</header>
        <button onClick={() => navigate('/menu')}>Online Menu</button>
      </section>

      <section id="LL-Section-SpecialItems">
        {data.map(({ id, title, price, description, image }) => (
          <Cards key={id} title={title} width={itemWidth} image={image}>
            <div className="LL-CardHeader card-variant-food">
              <header className="food-title">
                {title}
              </header>
              <p className="food-price">${price}</p>
            </div>
            <div className="food-desc">{description}</div>

            <div className="LL-OrderButton">
              <button className="p-order p-order2">Order for delivery</button>
            </div>
          </Cards>
        ))}
      </section>
    </section>
  );
};
