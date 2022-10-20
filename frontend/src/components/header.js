import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image";

import video from '../videos/video.mp4'

import '../styles/header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-container">
      <video src={video} autoPlay muted loop />
      <div className="header-content">
        <StaticImage className='header-content__logo' src='../images/logo.png' alt='Executive Limo Service' />
        <h3>Miami's Luxury Limousine Service</h3>
        <div className='header-buttons'>
          <a href='#form' className='btn btn-secondary' style={{ marginRight: '2rem'}}>Book Now</a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
