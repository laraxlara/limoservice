import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import '../styles/FAQ.css'

const FAQ = () => {
  return (
    <div className='faq-container'>
      <div className='faq-wrapper'>
        <p>Frequently Asked Questions 	&rarr;</p>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>1. Can I change my reservation last minute?</Accordion.Header>
                <Accordion.Body>The reservation can be changed last minute and we will do all possible to accomodate your new needs.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>2. How late can i cancel my reservation? What is cancelation policy?</Accordion.Header>
                <Accordion.Body>It is possible to cancel 3 hours before for full refund.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>3. How late can i make my reservation?</Accordion.Header>
                <Accordion.Body>You can make your reservation 3 hours before at least. We do recommend booking at least 24 hours prior to your need</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>4. What happens if my flight is delayed? Complimentary wait time?</Accordion.Header>
                <Accordion.Body>If your flight is delayed we will wait for you no matter what time you arrive! Also, once you have arrived we give up to 2 hours of waiting time for international flights and 1 hour for domestic flights.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>5. Do you provide car seats?</Accordion.Header>
                <Accordion.Body>Yes, we do provide car seats.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
                <Accordion.Header>6. What training requirements do you have for your drivers?</Accordion.Header>
                <Accordion.Body>All drivers are very carefully selected (drivers are hired with clean record only) and fully licensed to operate under chauffeur hack license issued by the State of Florida. Also all drivers are fully permitted and fully insured up to $300.000</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
                <Accordion.Header> 7. Do you charge services by mileage or by the hour?</Accordion.Header>
                <Accordion.Body>We charge per hour and per transfer (from point to point), if hired per hour we do require 3 hours minimum.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
                <Accordion.Header>8. What does the limousine company's insurance policy cover?</Accordion.Header>
                <Accordion.Body>All clients are fully insured up to $300.000.</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
                <Accordion.Header>9. Are food and drinks provided?</Accordion.Header>
                <Accordion.Body>Bottled water is included in the service price. Per special request we do provide drinks or food.</Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ
