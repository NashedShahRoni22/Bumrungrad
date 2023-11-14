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

export default function Home() {
  return (
    <section>
      <LandingBanner />
      <Disclaimer1 />
      <BookingModal />
      <HomePackages />
      <ClinicCenters />
      <WhyUs />
      <News />
      <Blogs />
      <HomeContact />
      <div className='fixed bottom-2 min-w-full z-50'>
        <MiddleBar />
      </div>
    </section>
  )
}
