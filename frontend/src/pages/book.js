import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import BookingForm from '../components/BookingForm'

const book = () => {
  return (
    <>
    <Layout>
    <div>
      <BookingForm />
    </div>
    </Layout>
    </>
  )
}

export const Head = () => <Seo title="Book Online" />

export default book
