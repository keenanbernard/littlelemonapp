const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const config = require('./config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "KBR00T98!",
  database: "littlelemon",
  insecureAuth : true
});

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
});

app.listen(3001, () => {
  console.log('Server running...');
});

// Get All Drivers
app.get('/fetchReservations', (req, res) => {
  const sql = "SELECT * FROM littlelemon.reservations ORDER BY id ASC";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while fetching data from the table.");
    } else {
      res.status(200).json(result);
    }
  });
});

// Add a new Driver
app.post("/postReservations", (req, res) => {
  const { guestSize, date, phoneNumber, email } = req.body;

  if (!guestSize || !date || !phoneNumber || !email) {
    return res.status(400).send("Missing required fields.");
  }

  const sql = "INSERT INTO reservations (GUEST_SIZE, DATE, CONTACT_NUMBER, EMAIL) VALUES (?, ?, ?, ?)";
  const values = [guestSize, date, phoneNumber, email];

  db.query(sql, values, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "An error occurred while inserting the reservation." });
    } else {
      res.status(200).json({ message: "SUCCESSFULLY CREATED RESERVATION" });
    }
  });
});

app.post('/sendEmail', async (req, res) => {
  const { email, subject, content } = req.body;

  try {
    const info = await transporter.sendMail({
      from: config.email.user,
      to: email,
      subject,
      text: content,
    });

    console.log('Email sent:', info.response);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

//Firebase
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require("./key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const dbFirestore = admin.firestore();

app.post('/postReservationsFS', async (req, res) => {
  const { guestSize, date, phoneNumber, email } = req.body;

  try {
    const reservationRef = dbFirestore.collection('reservations');
    await reservationRef.add({ guestSize, date, phoneNumber, email });

    res.status(200).json({ message: "SUCCESSFULLY CREATED RESERVATION" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while inserting the reservation." });
  }
});

exports.api = functions.https.onRequest(app);


