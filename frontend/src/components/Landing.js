import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import '../styles/Landing.css'

const Landing = () => {
  return (
    <div className='landing-home-page'>
        <div className="container px-3">
              <div className="row gx-5 align-items-center">
                  <div className="col-lg-6 order-lg-2">
                      <div className="p-2">
                        <StaticImage src='../images/landing1.PNG' alt="..." />
                    </div>
                  </div>
                  <div className="col-lg-6 order-lg-1">
                      <div className="p-2">
                          <h1 className="display-5">Limo Service Miami</h1>
                          <p className="display-6">For Any Occassion</p>
                          <p>Executive Limo Service is a luxury transportation service established in 2017. that offers an extensive fleet of vehicles to fulfill all your needs.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container px-3">
              <div className="row gx-5 align-items-center">
                  <div className="col-lg-6">
                    <div className="p-2">
                        <StaticImage src='../images/landing2.PNG' alt="..." />
                    </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="p-2">
                          <h2 className="display-6">Out Of City And State Rides</h2>
                          <h3 className="display-7">Long Distance Rides</h3>
                          <p>Enjoy your long rides with our luxury and above comfortable limousines. We offer enjoyable long distance rides out of both city and state for reasonable price. Book your ride on time.</p>
                      </div>
                  </div>
              </div>
          </div>
        <div className="container px-2">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-6 order-lg-2">
                    <div className="p-2">
                      <div className="card">
                        <div className="card-body">
                            <div className="plan-name">STRARTING AT ONLY </div>
                            <div className="plan-description">
                                <div className="plan-price month">$74.99<sub> / transfer</sub></div>
                                <p>Book your ride now for this special price and get on your destination with style.</p>
                            </div>
                            <div className="plan-description specs">Always on time<br /> + Best Service<br /> +Great Experience </div>
                            <div className="plan-cta">
                            <a className="button" href="/book">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="col-lg-6 order-lg-1">
                    <div className="p-2">
                        <h3 className="display-6">Best Limo Rates In Miami</h3>
                        <h4 className="display-7">Save Time And Money With Us</h4>
                        <p>Executive Limo Service provides the best limo rates in Miami, Florida. For only $74.99 you can enjoy the best service possible.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
