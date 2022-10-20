import React from 'react'

import Layout from '../components/layout'
import Slider from '../components/Slider'
import Seo from '../components/seo'

import * as aboutStyles from '../styles/about.module.css'

const about = () => {
  return (
    <>
      <Layout>
      <div className={aboutStyles.aboutPage}>     
        <div>
          <div className={aboutStyles.sliderWrapper}>
            <Slider />
          </div>
        </div>
        <div className={aboutStyles.aboutPageContent}>
          <h6>About Executive Limo Service</h6>     
          <p>Executive Limo Service is a luxury transportation service established in 2017. that offers an extensive fleet of vehicles to fulfill all your needs. Our mission is to provide our clients the best possible experience with our comfortable and safe ride. We are constantly elevating our service because our clients are our number one priority. </p>
          <h1>Top limo service in Miami</h1>
          <p>Executive Limo Service Miami offers different rides such as airport transfer, corporate transportation service, wedding service, private transportation and many more. In order for you to have the safest experience, we are continuously monitoring Federal and Local guidelines for any updates. With our simple booking process you will be accommodated with desired vehicle and professional driver as soon as possible. We offer professional rides with reasonable prices. Our vehicles are all embellished with luxurious and stylish seats providing you with full experience which is the most important thing to us. Cold water is something you can always count on during rides. We are striving for excellence hence we provided all our vehicles with QR codes so that you are always able to give us feedback while enjoying your ride. With our point to point service you will be served on your pick up location and safely transferred to the desired location in a high manner. Nevertheless if you are attending a special event or trying to get somewhere from an airport or seaport and vice versa we will provide you with hourly limousine service with the best transport rates in Miami, Florida. </p>
          <h4>Professional chauffeurs</h4>
          <p>All our chauffeurs are highly trained and licensed professionals in charge of looking after all of your needs. They possess the knowledge of the best possible routes and aim to get you safely to your destination in the short notice. Everyone we hire is checked and undergone serious training from taking care of the vehicle to impeccable appearance and excellent communication skills. Part of their excellence is also their insatiable desire for constant improvement of their expertise and precise feeling for time and punctuality. A chauffeur is in charge of the operation of the vehicle as well as the maintenance of the high level of cleanliness. If you want the best and the most comfortable service possible, book your ride with us.</p>          
        </div>
      </div>
      </Layout>
    </>
  )
}

export const Head = () => <Seo title="About Us" />

export default about
