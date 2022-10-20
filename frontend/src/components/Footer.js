import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { BsLinkedin } from 'react-icons/bs'

import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
            <div className='footer-wrapper'>
                <div className='footer-contact'>
                    <h4>Contact Us</h4>
                    <p><span>1000 Brickell Ave Ste 715</span></p>
                    <p>Miami, FL 33131</p>
                    <p>+1 305-570-2684</p>
                </div>

                <div className='footer-logo'>
                    <StaticImage width={250} src='../images/logo.png' alt='Executive Limo Service' />
                    
                    <div className='footer-icons'>
                        <a href='https://www.instagram.com/executivelimoservicemiami/'><GrInstagram style={{ marginRight: '1rem', fontSize: '2rem'}} /></a>
                        <a href='https://www.facebook.com/executivelimoservicellc/'><BsFacebook style={{ margin: '1rem', fontSize: '2rem'}} /></a>
                        <a href='/'><BsLinkedin style={{ marginLeft: '1rem', fontSize: '2rem'}} /></a>
                    </div>
                </div>

            <div className='footer-links'>
                <h4 className='footer-links-title'>Quick Links</h4>
                <a href='/'>HOME</a>
                <a href='/about'>ABOUT</a>
                <a href='/contact'>CONTACT</a>
                <a href='/book'>BOOK</a>
                <a href='/book'>FLEET</a>
                <a href='/book'>BLOG</a>
            </div>
            </div>

            <div className='footer-copyright'>
                <p>2022 Executive Limo Service. All Rights reserved.</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer
