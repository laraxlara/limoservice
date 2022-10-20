import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../styles/Cards.css'

const Cards = () => {
  return (
    <div className='cards-container'>
      <Row xs={1} sm={1} md={2} lg={3}>
          <Col style={{ paddingBottom: '1rem'}}>
            <Card style={{ height: '25rem', backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
              <StaticImage src='../images/special.jpg' alt='Wedding Limo Service Miami' />
              <Card.Body>
                <Card.Title>Special Occassion Limo Service</Card.Title>
                <Card.Text>Enjoy this special day with us. We offer outstanding and stylish limo service that will make this day the most memorable one during your lifetime.</Card.Text>
                <a href='/services' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Read More</a>
                <a href='/book' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Book Now</a>
              </Card.Body> 
            </Card>
          </Col>
          <Col style={{ paddingBottom: '1rem'}}>
            <Card style={{ height: '25rem', backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
              <StaticImage src='../images/corporate.jpg' alt='Corporate Limo Service Miami' />
                <Card.Body>
                  <Card.Title>Corporate Limo Service</Card.Title>
                  <Card.Text>Experience professionalism and thrustworthiness on the highest possible level and be on your arranged business meeetings and events relaxed and on time.</Card.Text>
                  <a href='/services' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Read More</a>
                  <a href='/book' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Book Now</a>
                </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingBottom: '1rem'}}>
            <Card style={{ height: '25rem', backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
              <StaticImage src='../images/airport.jpg' alt='Airport Transfer Miami' />
              <Card.Body>
                <Card.Title>Airport || Seaport Transfer</Card.Title>
                <Card.Text>Avoid the crowd on airports and seaports and enjoy your comfortable ride with us. We will pick you up when arranged and take care of all your luggage from any airport or seaport in Miami.</Card.Text>
                <a href='/services' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Read More</a>
                <a href='/book' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Book Now</a>
              </Card.Body>
            </Card>
          </Col>      
          <Col style={{ paddingBottom: '1rem'}}>
            <Card style={{ height: '25rem', backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
              <StaticImage src='../images/long.jpg' alt='Miami Florida' />
              <Card.Body>
                <Card.Title>Long Distance Limo & Car Service</Card.Title>
                <Card.Text>Whether you want to visit Orlando or any other city nearby or maybe go out of the state line we will accomodate your needs. Plan your trip in advance with the best limo service.</Card.Text>
                <a href='/services' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Read More</a>
                <a href='/book' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Book Now</a>
              </Card.Body>           
            </Card>
          </Col>
          <Col style={{ paddingBottom: '1rem'}}>
            <Card style={{ height: '25rem', backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
              <StaticImage src='../images/party.jpg' alt='Miami Party Limo' />
              <Card.Body>
                <Card.Title>Party Limo Service</Card.Title>
                <Card.Text>Make your Birthday or Bachelor/Bachelorette party whole with luxury limousine. Book on time and arrange everything for you and your friends.</Card.Text>
                <a href='/services' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Read More</a>
                <a href='/book' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Book Now</a>
              </Card.Body>    
            </Card>
          </Col>
          <Col style={{ paddingBottom: '1rem'}}>
            <Card style={{ height: '25rem', backgroundColor: 'rgb(30, 30, 30)', color: 'white' }}>
              <StaticImage src='../images/events.jpg' alt='Red Carpet Limo Service Miami' />
              <Card.Body>
                <Card.Title>Events & Tours Limo Service</Card.Title>
                <Card.Text>You are visiting Miami and want to see some beautiful places, want to visit an upcoming event or  spend a luxuorious night in the city? Miami is a city with variety of events. Book your limo and visit any of them without any worries on your mind. </Card.Text>
                <a href='/services' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Read More</a>
                <a href='/book' className='btn btn-outline-secondary' style={{ marginRight: '2rem'}}>Book Now</a>
              </Card.Body>
            </Card>
          </Col>    
        </Row>
    </div>
  )
}

export default Cards
