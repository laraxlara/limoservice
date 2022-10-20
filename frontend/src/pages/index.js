import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from '../components/header'
import Landing from "../components/Landing"
import BookingForm from "../components/BookingForm"
import Cards from "../components/Cards"

import * as styles from "../styles/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <Landing />
    <BookingForm />
    <Cards />
  </Layout>
)

export const Head = () => <Seo title="Executive Limo Service | Limo Service Miami | Car Service Miami" />

export default IndexPage
