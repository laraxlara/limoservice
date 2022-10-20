const express = require('express')
const app = express();
require('dotenv').config()
const cors = require('cors')
const nodemailer = require("nodemailer")
const { google } = require('googleapis');
const morgan = require('morgan')
const port = 5000;

app.use(morgan('dev'))
app.use(express.json()); 
app.use(cors());

// const mailer = nodemailer.createTransport({
//     // host: 'smtp.google.com',
//     // secure: true,
//     // port: 465,
//     service: "Gmail",
//     auth: {
//         type: 'OAuth2',
//         user: process.env.GMAIL_ADRESS,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN,
//         accessToken: process.env.accessToken
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
// })

// mailer.verify((err, success) => {
//   err
//     ? console.log(err)
//     : console.log(`=== Server is ready to take messages: ${success} ===`);
// });

// app.post("/send", function (req, res) {
//   let mailOptions = {
//     from: "t@gmail.com",
//     to: "laraxlara97@gmail.com",
//     subject: "Nodemailer API",
//     text: "Hi from your nodemailer API",
//   };

// mailer.sendMail(mailOptions, function (err, data) {
//   if (err) {
//     res.json({
//       status: "fail",
//     })
//   } else {
//     console.log("Email sent successfully");
//     res.json({
//       status: "success",
//     })
//   }
//   });
// })

// if (process.env.NODE_ENV === 'development') {
//     app.use(cors({ origin: `${process.env.CLIENT_URL}`}))
// }


app.post('/send', cors(), async (req, res) => {
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
      to: "laraxlara97@gmail.com",
      subject: "Reservation Request",
      html: `<div className="email">
      <h1>Email Test</h1>
      <p>Name: ${name}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Email: ${email}</p>
      <p>Pick Up Location: ${pickUpAdress}</p>
      <p>Drop Of Location: ${dropOfAdress}</p>
      <p>Date: ${date}</p>
      <p>Time: ${time}</p>
      </div>`
    })
})

app.listen(process.env.PORT || port, () => {
    console.log(`Now listening on port ${port}`);
}); 