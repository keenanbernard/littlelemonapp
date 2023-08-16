import React, {useState} from "react";
import "./BookingPage.css"
import { Link } from "react-scroll";

const BookingPage = () =>{

  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(0);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const generateNumberArray = (start, end) => {
    const numberArray = [];

    for (let i = start; i <= end; i++) {
      numberArray.push(i);
    }

    return numberArray;
  }

  const numbers = generateNumberArray(0, 8);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneNumberRegex = /\d/g
  const valid = emailRegex.test(email) && date !== '' && guests !== 0 && phoneNumberRegex.test(phoneNumber) && phoneNumber.length >= 7;

  const stateHandler = (event, type) => {
    event.preventDefault()

    if (type === 'date') setDate(event.target.value);

    if (type === 'guests') setGuests(event.target.value);

    if (type === 'email') setEmail(event.target.value);

    if (type === 'phone') setPhoneNumber(event.target.value);

  }

  const resetStates = () =>{
    setDate('');
    setGuests(0);
    setEmail('');
    setPhoneNumber('');
  }

  return(
    <section className="LL-Booking">
      <div className="LL-Booking-Banner">
        <img src="https://ik.imagekit.io/Bernard98/Little%20Lemon%20Assets/622b15f3452a1-859561.jpg?updatedAt=1692053132710" alt="Dining Room" />
        <Link to='reservations' offset={0} duration={1200} smooth={true} delay={100}>
          <button>reserve</button>
        </Link>
      </div>
      <section id="reservations" className="LL-Booking-Reservation">
        <div className="LL-Booking-left">
          <header className="LL-Booking-Title">
            Reservations
          </header>
          <p className="LL-Booking-desc">hours</p>
          <p className="LL-Booking-desc">Lunch</p>
          <p className="LL-Booking-secondary-desc">Monday - Friday: 11:45am - 1:15pm</p>
          <p className="LL-Booking-desc">Dinner</p>
          <p className="LL-Booking-secondary-desc">Monday - Friday: 5pm - 9:30pm</p>
          <p className="LL-Booking-desc">Please note: Little lemon is closed to the public on Saturdays and Sundays</p>
          <p className="LL-Booking-desc">We are accepting online reservations only. Online reservations can be made 31 days in advance and for up to 8 guests</p>
          <p className="LL-Booking-desc">Explore frequently asked questions about dining at Little lemon.</p>
          <p className="LL-Booking-desc">Reserve a seat at the Chef’s Rail and watch the action unfold in the open kitchen. Tasting menu only. Limited seating.</p>
          <p className="LL-Booking-desc">We accept reservations for bar seating from 6:30pm onwards. Walk-ins are welcome and subject to availability.</p>
        </div>
        <div className="LL-Booking-right">
          <div className="LL-Booking-Card">
            <p>Book a Table</p>
            <select value={guests} className="LL-Booking-Options" onChange={(event) => stateHandler(event, 'guests')}>
              {numbers.map((number) => (
                <option key={number}>{number}</option>
                ))}
            </select>
            <input value={date} className="LL-Booking-Date" type="date" onChange={(event) => stateHandler(event, 'date')}></input>
            <input value={phoneNumber} placeholder="+501-614-4297" className={`LL-Booking-Number`} type="text" onChange={(event) => stateHandler(event, 'phone')}></input>
            <input value={email} placeholder="johndoe@gmail.com" className={`LL-Booking-Email`} type="text" onChange={(event) => stateHandler(event, 'email')}></input>
            <button disabled={!valid} className={`LL-Booking-Button ${!valid}`} onClick={resetStates}>Reserve Table</button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default BookingPage;