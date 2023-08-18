import * as emailjs from "emailjs-com";
import {NotificationManager} from "react-notifications";

export const sendEmailJS = async (email, subject, content) => {
  try {
    const result = await emailjs.send(
      "service_vjs8nob", // Replace with your EmailJS service ID
      "template_wor2dis", // Replace with your EmailJS template ID
      {
        to_email: email,
        subject,
        message: content,
      },
      "3_z_JHiqMlAUjcNIb"
    );

    if(result.text === 'OK') NotificationManager.success('Email sent successfully', 'Success');
  } catch (error) {
    NotificationManager.error('Error sending email', 'Error');
  }
};