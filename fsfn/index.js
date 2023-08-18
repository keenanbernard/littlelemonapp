/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-fsfn/v2/https");
 * const {onDocumentWritten} = require("firebase-fsfn/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-fsfn/v2/https");
const logger = require("firebase-fsfn/logger");

const functions = require('firebase-fsfn');
const admin = require('firebase-admin');
const serviceAccount = require("../server/key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const dbFirestore = admin.firestore();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

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

