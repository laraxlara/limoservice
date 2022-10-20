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
              <NavDropdown.Item href="/services/wedding" disabled>Special Occassion Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/corporate">Wedding Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/">Prom Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/">Proposal || Engagement Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/wedding" disabled>Corporate Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/prom">Business Events</NavDropdown.Item>
              <NavDropdown.Item href="/services/tour">Conference Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/wedding" disabled>Airport || Seaport Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/bachelor">Airport Miami Car Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/bachelor">Seaport Miami Car Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/bachelor">MIA to Miami Beach</NavDropdown.Item>
              <NavDropdown.Item href="/services/bachelor">MIA to Port Miami</NavDropdown.Item>
              <NavDropdown.Item href="/services/bachelor">MIA to Port Miami</NavDropdown.Item>
              <NavDropdown.Item href="/services/bachelor">Fort Lauderdale Transfers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/wedding" disabled>Long Distance Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/prom">Out Of City Rides</NavDropdown.Item>
              <NavDropdown.Item href="/services/tour">Out Of State Rides</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/wedding" disabled>Party Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/prom">Birthday Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/tour">Bachelorette Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/tour">Bachelor Limo Service</NavDropdown.Item>
              <NavDropdown.Item href="/services/tour">Quinceañera || Sweet 16 Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/wedding" disabled>Tours || Events Limo Service</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/services/prom">Winery Tours Limo Rental</NavDropdown.Item>
              <NavDropdown.Item href="/services/tour">Sports Events Limo Rental</NavDropdown.Item>
              <NavDropdown.Item href="/services/tour">Music Events || Night Out</NavDropdown.Item>
              <NavDropdown.Item href="/services/tour">Miami Sightseeing Limo Rental</NavDropdown.Item>
              <NavDropdown.Item href="/services/tour">Red Carpet Limo Service</NavDropdown.Item>
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
