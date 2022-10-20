import React from 'react'
import { Link } from 'gatsby'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { StaticImage } from 'gatsby-plugin-image'

import '../styles/BlogLayout.css'

const BlogLayout = ({ children, title }) => {
  return (
    <div className='blog-container'>
      <div className='blog-wrapper'>
        <div className='blog-content'>
            <div className='blog-header'>
              <h1>Executive Limo Service</h1>
              <h2>Limo Service Miami</h2>
              <h4>Blog</h4>
            </div>
            <p>{children}</p>
            <StaticImage src='../../images/blog.jpg' alt='' />
        </div>

        <div className='blog-right'>
            <div className='blog-links'>
                <Link to='/services'>See Our Services</Link>
                <Link to='/about'>Learn More Executive Limo Service</Link>
            </div>
            <Card style={{ width: '22rem', marginBottom: '2rem' }}>
              <StaticImage variant="top" src="../images/fleet5.jpg" />
              <Card.Body>
                <Card.Title>Luxury Fleet Miami</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Chauffered Black Car Service</Card.Subtitle>
                <Card.Text>Executive Limo Service is a luxury transportation service that offers an extensive fleet of vehicles. All our chauffeurs are highly trained and licensed professionals in charge of looking after all of your needs.</Card.Text>
                <Card.Link href='/fleet'>See Fleet</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: '22rem' }}>
                <Card.Body>
                    <Card.Title>Luxury Fleet Miami</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Chauffered Black Car Service</Card.Subtitle>
                    <Card.Text>>Executive Limo Service is a luxury transportation service that offers an extensive fleet of vehicles. All our chauffeurs are highly trained and licensed professionals in charge of looking after all of your needs.</Card.Text>
                    <Button variant='danger'>Book Now</Button>
                </Card.Body>
            </Card>
        </div>
      </div>
    </div>
  )
}

export default BlogLayout
