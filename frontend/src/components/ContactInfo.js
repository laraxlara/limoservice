import React from "react"

import { AiOutlineMail } from "react-icons/ai"
import { AiOutlinePhone } from "react-icons/ai"
import { GoLocation } from "react-icons/go"

import "../styles/ContactInfo.css"

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-info-wrapper">
        <h1>Executive Limo Service</h1>
        <h2>Contact Information</h2>
        <div className="contact-info">
          <h3>
            <i>
              <GoLocation />
            </i>{" "}
            1000 Brickell Ave Ste 715
          </h3>
          <h3>
            <i>
              <GoLocation />
            </i>{" "}
            Miami, FL 33131
          </h3>
          <h3>
            <i>
              <AiOutlinePhone />
            </i>
            <a href="tel://+13055702684">+1 305-570-2684</a>
          </h3>
          <h3>
            <i>
              <AiOutlineMail />
            </i>{" "}
            niko@executive.net
          </h3>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
