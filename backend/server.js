const express = require('express')
const app = express();
require('dotenv').config()
const cors = require('cors')
const nodemailer = require("nodemailer")
const { google } = require('googleapis');
const morgan = require('morgan')
const port = 4000;

app.use(morgan('dev'))
app.use(express.json()); 
app.use(cors());


app.post('/send', cors(), async (req, res, next) => {
  try {
    let {name, phoneNumber, email, numOfPassengers, pickUpAdress, dropOfAdress, type, date, time, service, message } = req.body
    const transport = nodemailer.createTransport({
          host: 'smtp.google.com',
          secure: true,
          port: 465,
          service: "Gmail",
          auth: {
              type: 'OAuth2',
              user: process.env.GMAIL_ADRESS,
              clientId: process.env.CLIENT_ID,
              clientSecret: process.env.CLIENT_SECRET,
              refreshToken: process.env.REFRESH_TOKEN,
              accessToken: process.env.accessToken
          },
          tls: {
            rejectUnauthorized: false
          }
      })
      await transport.sendMail({
        from: process.env.GMAIL_ADRESS,
        to: process.env.GMAIL_ADRESS,
        subject: "Reservation Request",
        html: `<div className="email">
        <h1>Reservation Request</h1>
        <p>Name: ${name}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Email: ${email}</p>
        <p>Number of passangers: ${numOfPassengers}</p>
        <p>Pick Up Location: ${pickUpAdress}</p>
        <p>Drop Of Location: ${dropOfAdress}</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>Message: ${message}</p>
        <p>Service: ${service}</p>
        <p>Type: ${type}</p>
        </div>`
      })
      return res.status(200).json({ status: 200, message: 'Mail successfully sent'});
  } catch (e) {
    console.log(e);
    next(e);
  }
})

app.listen(process.env.PORT || port, () => {
    console.log(`Now listening on port ${port}`);
}); 