import React from 'react'
import LandingBanner from './LandingBanner'

import WhyUs from './WhyUs'
import MiddleBar from '../../shared/FixedBar/MiddleBar'
import BookingModal from './BookingModal'

import ClinicCenters from './ClinicCenters'

import News from './News'
import Blogs from './Blogs'

import HomePackages from './HomePackages'
import Disclaimer1 from './Disclaimer1'

import HomeContact from './HomeContact'

import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function Home() {
  return (
    <section>
      <HelmetProvider>
        {' '}
        <Helmet>
          <meta charSet='utf-8' />
          <title>
            Bumrungrad International Hospital: Premier Care | Book Now
          </title>
          <meta
            name='description'
            content='Discover premier healthcare at Bumrungrad International Hospital. Expert care, personalized services. Book your appointment for a healthier tomorrow.
'
          />
          <link rel='canonical' href='https://bumrungraddiscover.com/' />
        </Helmet>
      </HelmetProvider>

      <LandingBanner />
      <Disclaimer1 />
      <BookingModal />
      <HomePackages />
      <ClinicCenters />
      <WhyUs />
      <News />
      <Blogs />
      <HomeContact />
      <div className='fixed bottom-0 md:bottom-2 min-w-full z-50'>
        <MiddleBar />
      </div>
    </section>
  )
}
