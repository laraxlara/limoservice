import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import Seo from "../components/seo"
import Layout from '../components/layout'
import * as fleetStyles from '../styles/fleet.module.css'

const fleet = () => {
  return (
    <>
    <Layout>
    <div className={fleetStyles.fleetPageContainer}>
        <div>
            <div className={fleetStyles.fleetHeaderWrapper}>
                <h5>Luxury Fleet</h5>
                <h3>Book you luxury ride now</h3>
            </div>
            <div className={fleetStyles.fleetContentPageWrapper}>
                <div className={fleetStyles.fleetContentHeader}>
                    <h1>Chauffeured Black Car Service Miami</h1>
                </div>
                <div>
                    <div className={fleetStyles.fleetWrapper}>
                        <div className={fleetStyles.fleetCardContentWrapper}>
                            <div className={fleetStyles.fleetCardImage}>
                                <StaticImage src='../images/fleet1.jpg' alt='' />
                            </div>
                            <div className={fleetStyles.fleetCardContent}>
                                <h6>Executive Sedan Cadillac XTS</h6>
                                <p>Max People: 3 || Max Luggage: 3</p>
                                <p>Executive service for business travel.</p>
                                <a className='btn btn-secondary' href='/book'>Book Now</a>
                            </div>
                        </div>
                        <div className={fleetStyles.fleetCardContentWrapper}>
                            <div className={fleetStyles.fleetCardImage}>
                                <StaticImage src='../images/fleet4.jpg' alt='' />
                            </div>
                            <div className={fleetStyles.fleetCardContent}>
                                <h6>Luxury Sedan Mercedes E Class</h6>
                                <p>Max People: 3 || Max Luggage: 3</p>
                                <p>Ultimate offer for luxorious and high class rides.</p>
                                <a className='btn btn-secondary' href='/book'>Book Now</a>
                            </div>
                        </div>
                        <div className={fleetStyles.fleetCardContentWrapper}>
                            <div className={fleetStyles.fleetCardImage}>
                                <StaticImage src='../images/fleet2.jpg' alt='' />
                            </div>
                            <div className={fleetStyles.fleetCardContent}>
                                <h6>Executive SUV Chevy Suburban</h6>
                                <p>Max People: 6 || Max Luggage: 6</p>
                                <p>Exceptionally refined offer that fits all your needs.</p>
                                <a className='btn btn-secondary' href='/book'>Book Now</a>
                            </div>
                        </div>
                        <div className={fleetStyles.fleetCardContentWrapper}>
                            <div className={fleetStyles.fleetCardImage}>
                                <StaticImage src='../images/fleet5.jpg' alt='' />
                            </div>
                            <div className={fleetStyles.fleetCardContent}>
                                <h6>Luxury SUV Cadillac Escalade</h6>
                                <p>Max People: 6 || Max Luggage: 6</p>
                                <p>Comfortable and opulent option combined with extreme endurance will transform your busy day into an enjoyful one.</p>
                                <a className='btn btn-secondary' href='/book'>Book Now</a>
                            </div>
                        </div>
                        <div className={fleetStyles.fleetCardContentWrapper}>
                            <div className={fleetStyles.fleetCardImage}>
                                <StaticImage src='../images/fleet3.jpg' alt='' />
                            </div>
                            <div className={fleetStyles.fleetCardContent}>
                                <h6>Luxury SUV Mercedes Sprinter</h6>
                                <p>Max People: 14 || Max Luggage: 14</p>
                                <p>Spacious and sophisticated choice for a variety of group travels such as business meetings, parties, special events and airport trasfers.</p>
                                <a className='btn btn-secondary' href='/book'>Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    </div>
    </Layout>
    </>
  )
}

export const Head = () => <Seo title="Chauffered Black Car Fleet | Executive Limo Service | Limo Service Miami" />

export default fleet
