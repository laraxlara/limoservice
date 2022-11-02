import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import { AiFillPhone } from 'react-icons/ai'

import '../styles/Navbaar.css'

const Navbaar = () => {
  return (
    <div className='navbar-container'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Executive Limo Service</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">           
            <Nav.Link href="/">Home</Nav.Link>           
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/book">Book</Nav.Link>
            <Nav.Link href="/fleet">Fleet</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/services">See All Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item disabled>Special Occassion Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/wedding-limo-service">Wedding Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/prom-limo-service">Prom Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/proposal-and-engagement-limo-service">Proposal || Engagement Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item disabled>Corporate Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/conference-limo-service">Conference Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item disabled>Airport || Seaport Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/airport-miami-limo-service">Airport Miami Car Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/seaport-miami-limo-service">Seaport Miami Car Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/mia-to-miami-beach-transfers">MIA to Miami Beach</NavDropdown.Item>
              <NavDropdown.Item href="/services/mia-to-port-miami-transfers">MIA to Port Miami</NavDropdown.Item>
              <NavDropdown.Item href="/services/mia-to-port-everglades-transfers">MIA to Port Everglades</NavDropdown.Item>
              <NavDropdown.Item href="/services/fort-lauderdale-airport-miami-transfers">Fort Lauderdale Transfers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item disabled>Long Distance Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/out-of-city-rides">Out Of City Rides</NavDropdown.Item>
              <NavDropdown.Item href="/services/out-of-state-rides">Out Of State Rides</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item disabled>Party Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/birthday-limo-service-miami">Birthday Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/homecoming-limo-service">Homecoming Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/graduation-day-limo-service">Graduation Day Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/bachelorette-limo-service-miami">Bachelorette Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/bachelor-limo-service-miami">Bachelor Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/sweet-16-limo-service">Sweet 16 Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/quincenera-limo-service">Quinceañera</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item disabled>Tours || Events Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/miami-tours-events-limo">Miami Tours And Events Limo</NavDropdown.Item>
              <NavDropdown.Item href="/services/art-basel-limo-service">Art Basel Limo</NavDropdown.Item>
              <NavDropdown.Item href="/services/winery-tours-miami">Winery Tours</NavDropdown.Item>
              <NavDropdown.Item href="/services/music-events-miami">Music Festivas And Night Out</NavDropdown.Item>
              <NavDropdown.Item href="/services/miami-sightseeing-limo">Miami Sightseeing Limo Rental</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>           
            <Nav.Link eventKey={2} href="#memes"><Button variant="outline-secondary">Dial Now: <AiFillPhone  style={{ color: '#f9f983', fontSize: '1.5rem' }}/>  +1 305-570-2684</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbaar
