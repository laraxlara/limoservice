import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Layout from "./layout"
import BookingForm from "../components/BookingForm"

import { AiOutlinePhone } from "react-icons/ai"

import "../styles/ServiceLayout.css"

const ServiceLayout = ({ children }) => {
  return (
    <Layout>
      <div className="services-container">
        <div className="services-wrapper">
          <div className="service-content-wrapper">
            <div className="service-content-header">
              <h1>
                Executive <span>Limo Service</span>
              </h1>
              <h2>Limo Service Miami</h2>
            </div>
            <div className="service-content">
              <p>{children}</p>
              <StaticImage src="../../images/services.jpg" alt="" />

              <div className="service-page-down">
                <h3>
                  TRANSFERS STARTING AT ONLY <span>74.99 $</span>
                </h3>
                <div className="service-page-h5">
                  <h5>
                    <span>&#x2611;</span> PROFESSIONAL DRIVERS
                  </h5>
                  <h5>
                    <span>&#x2611;</span> LUXURY LIMOS
                  </h5>
                  <h5>
                    <span>&#x2611;</span> BEST RATES
                  </h5>
                  <h5>
                    <span>&#x2611;</span> EASY ONLINE BOOKING{" "}
                  </h5>
                </div>
                <h4>
                  CALL US{" "}
                  <i>
                    <AiOutlinePhone />
                  </i>
                  <a href="tel://+13055702684">+1 305-570-2684</a> <br /> OR{" "}
                  <br /> BOOK NOW BY FILLING OUT THE FORM
                </h4>
              </div>
            </div>
          </div>

          <div className="service-right">
            <div className="service-links">
              <Link to="/">Go To Home Page</Link>
              <Link to="/about">Learn More Executive Limo Service</Link>
            </div>
            <Card style={{ width: "22rem", marginBottom: "2rem" }}>
              <StaticImage variant="top" src="../images/fleet5.jpg" />
              <Card.Body>
                <Card.Title>Luxury Fleet Miami</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Chauffered Black Car Service
                </Card.Subtitle>
                <Card.Text>
                  Executive Limo Service is a luxury transportation service that
                  offers an extensive fleet of vehicles. All our chauffeurs are
                  highly trained and licensed professionals in charge of looking
                  after all of your needs.
                </Card.Text>
                <Card.Link href="/fleet">See Fleet</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title>Why Is Limo Service Better Than Uber?</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Read Only On Our Blog
                </Card.Subtitle>
                <Card.Text>
                  With the Uber service, you never know which vehicle is going
                  to pick you up, is it clean, is it spacious and there is
                  always the possibility for the driver to cancel the ride. Limo
                  service allows you to choose what type of vehicle you want ,
                  it is always perfectly clean with a bottle of cold water...
                </Card.Text>
                <Card.Link href="/blog">Read More</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <BookingForm />
    </Layout>
  )
}

export default ServiceLayout
