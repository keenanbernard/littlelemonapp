import {NotificationManager} from "react-notifications";

export const sendEmailGoogle = async (email, subject, content) => {
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