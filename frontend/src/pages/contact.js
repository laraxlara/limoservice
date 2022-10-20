import React from 'react'
import Seo from "../components/seo"
import Layout from '../components/layout'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'

const contact = () => {
  return (
    <Layout>
      {/* <div className='contact-page-container'></div> */}
      <ContactInfo />
      <ContactForm />
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Us" />

export default contact
