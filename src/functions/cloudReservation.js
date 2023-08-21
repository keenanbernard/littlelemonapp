import {NotificationManager} from "react-notifications";
import * as emailjs from "emailjs-com";
const service = require('./emailJSInfo/serviceAccount');
export const postReservationCloud = async (email, subject, content, reset, navigate) => {
  try {
    await sendEmailJSCloud(email, subject, content, navigate);
  } catch (error) {
    NotificationManager.error(error.message || 'Service Unreachable', 'ERROR', 5000);
  } finally {
    reset();
  }
};

const sendEmailJSCloud = async (email, subject, content, navigate) => {
  try {
    const result = await emailjs.send(
      service.account.id,
      service.account.templateId,
      {
        to_email: email,
        subject,
        message: content,
      },
      "3_z_JHiqMlAUjcNIb"
    );

    if(result.text === 'OK') navigate('/confirmation');
  } catch (error) {
    NotificationManager.error(error.message || 'Service Unreachable', 'ERROR', 5000);
  }
};