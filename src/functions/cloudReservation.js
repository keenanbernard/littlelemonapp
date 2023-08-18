import {NotificationManager} from "react-notifications";
import * as emailjs from "emailjs-com";

export const postReservationCloud = async (email, subject, content, reset) => {
  try {
    await sendEmailJSCloud(email, subject, content);
  } catch (error) {
    NotificationManager.error(error.message || 'Service Unreachable', 'ERROR', 5000);
  } finally {
    reset();
  }
};

const sendEmailJSCloud = async (email, subject, content) => {
  try {
    const result = await emailjs.send(
      "service_vjs8nob",
      "template_wor2dis",
      {
        to_email: email,
        subject,
        message: content,
      },
      "3_z_JHiqMlAUjcNIb"
    );

    if(result.text === 'OK') NotificationManager.success('Reservation confirmed', 'Success');
  } catch (error) {
    NotificationManager.error(error.message || 'Service Unreachable', 'ERROR', 5000);
  }
};