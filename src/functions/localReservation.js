import {NotificationManager} from "react-notifications";

export const postReservation = async (guests, date, phoneNumber, email, subject, content, reset) => {
  try {
    const response = await fetch('http://localhost:3001/postReservationsFS', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        guestSize: guests,
        date: date,
        phoneNumber: phoneNumber,
        email: email,
      }),
    });

    if (response.ok) {
      NotificationManager.success('Reservation confirmed', 'SUCCESS', 5000);
      await sendEmailGoogle(email, subject, content);
    } else {
      const errorData = await response.json();
      NotificationManager.error(errorData.message, 'ERROR', 5000);
    }
  } catch (error) {
    NotificationManager.error(error.message || 'Service Unreachable', 'ERROR', 5000);
  } finally {
    reset();
  }
};

const sendEmailGoogle = async (email, subject, content) => {
  try {
    const response = await fetch('http://localhost:3001/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, content }),
    });

    if (response.ok) {
      NotificationManager.success('Reservation Emailed', 'SUCCESS', 5000);
    } else {
      const errorData = await response.json();
      NotificationManager.error(errorData.error || 'Failed to send email', 'Error', 5000);
    }
  } catch (error) {
    NotificationManager.error('An error occurred while sending the email', 'Error', 5000);
  }
};