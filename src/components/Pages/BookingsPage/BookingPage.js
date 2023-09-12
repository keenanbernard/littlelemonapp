import React, {useEffect, useState} from "react";
import "./BookingPage.css"
import { Link } from "react-scroll";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import {postReservationCloud} from "../../../functions/cloudReservation";
import {LoadingSpinner} from "../../Shared/LoadingSpinner/Loading Spinner";
import {useNavigate} from "react-router-dom";

const BookingPage = () =>{
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [occasion, setOccasion] = useState('')
  const [subject] = useState('Reservation Confirmed');
  const [content, setContent] = useState(``);
  const [isValidDate , setIsValidDate] = useState('');
  const [isValidPhoneNumber , setIsValidPhoneNumber] = useState('');
  const [isValidEmail , setIsValidEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const resetStates = () =>{
    setDate('');
    setGuests(0);
    setEmail('');
    setPhoneNumber('');
    setContent(``);
    setIsValidDate('');
    setIsValidPhoneNumber('');
    setIsValidEmail('');
  };

  const generateNumberArray = (start, end) => {
    const numberArray = [];

    for (let i = start; i <= end; i++) {
      numberArray.push(i);
    }

    return numberArray;
  }

  const numbers = generateNumberArray(1, 8);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneNumberRegex = /\d/g;
  const occasions = ['None','Birthday', 'Anniversary', 'Date', 'Special Occasion', 'Business Meal']
  const validation = emailRegex.test(email) && date !== '' && phoneNumberRegex.test(phoneNumber) && phoneNumber.length >= 7;

  const isValidationHandler = (type) => {
    if (type === 'date') setIsValidDate(date === '' ? 'error' : 'valid');

    if(type === 'email') setIsValidEmail(!emailRegex.test(email) ? 'error' : 'valid');

    if(type === 'phone') setIsValidPhoneNumber((phoneNumberRegex.test(phoneNumber) && phoneNumber.length >= 7) ? 'valid' : 'error');
  }


  const stateHandler = (event, type) => {
    event.preventDefault()

    if (type === 'date') {
      const dateTimeString = event.target.value;
      const [datePart, timePart] = dateTimeString.split("T");
      const formattedDateTime = `${datePart} ${timePart}`;
      setDate(formattedDateTime);
      setIsValidDate(date === '' ? 'error' : 'valid')
    }

    if (type === 'guests') setGuests(event.target.value);

    if (type === 'email') setEmail(event.target.value);

    if (type === 'phone') setPhoneNumber(event.target.value);

    if (type === 'occasion') setOccasion(event.target.value);
  }

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  useEffect(() =>{
    setContent(`Your Little Lemon Reservation has been confirmed for ${guests} on ${date}.`);
  }, [date, guests, email, phoneNumber])

  const handleReserveButtonClick = () => {
    setIsLoading(true);

    // Perform your reservation logic here
    postReservationCloud(email, subject, content, resetStates, navigate)
      .then(() => {
        const controller = new AbortController();
        controller.abort();
      })
      .finally(() => {
        setIsLoading(false);
      });


  };

  return(
    <section data-testid="bookingPage" className="LL-Booking">
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
            <label>Party Size:</label>
            <select data-testid="guestSelection" value={guests} className={`LL-Booking-Options`} onBlur={() => isValidationHandler('guests')} onChange={(event) => stateHandler(event, 'guests')}>
              {numbers.map((number) => (
                <option key={number}>{number}</option>
                ))}
            </select>
            <label>Date:</label>
            <input
              data-testid="dateInput"
              value={date}
              className={`LL-Booking-Date ${isValidDate}`}
              type="datetime-local"
              step="60"
              min={getCurrentDateTime()}
              onBlur={() => isValidationHandler('date')}
              onChange={(event) => stateHandler(event, 'date')}></input>
            {isValidDate === 'error' && <span>Date is required.</span>}
            <label>Contact Number:</label>
            <input
              data-testid="mobileNumberInput"
              value={phoneNumber}
              placeholder="+501-614-4297"
              className={`LL-Booking-Number ${isValidPhoneNumber}`}
              type="text"
              onBlur={() => isValidationHandler('phone')}
              onChange={(event) => stateHandler(event, 'phone')}></input>
            {isValidPhoneNumber === 'error' && <span>Phone number is required.</span>}
            <label>Email:</label>
            <input
              data-testid="emailInput"
              value={email}
              placeholder="johndoe@gmail.com"
              className={`LL-Booking-Email ${isValidEmail}`}
              type="text"
              onBlur={() => isValidationHandler('email')}
              onChange={(event) => stateHandler(event, 'email')}></input>
            {isValidEmail === 'error' && <span>Email is required.</span>}
            <label>Occasion (optional):</label>
            <select
              data-testid="occasionSelect"
              value={occasion}
              className={`LL-Booking-Occasion`}
              onChange={(event) => stateHandler(event, 'occasion')}>
              {occasions.map((ocs, id) => (
                <option key={id}>{ocs}</option>
              ))}
            </select>
            <button
              data-testid="reserveButton"
              disabled={!validation}
              className={`LL-Booking-Button ${!validation}`}
              onClick={handleReserveButtonClick}>Reserve Table</button>
          </div>
          {isLoading && (
            <div className="backdrop">
              <LoadingSpinner />
            </div>
          )}
        </div>
      </section>
      <NotificationContainer/>
    </section>
  )
}

export default BookingPage;