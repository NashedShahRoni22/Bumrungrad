import React from 'react'
import Services from './Services'
import LandingBanner from './LandingBanner'
import ClinicCenters from './ClinicCenters'
import WhyUs from './WhyUs'
import MiddleBar from '../../shared/FixedBar/MiddleBar'
import BookingModal from './BookingModal'

export default function Home() {
  return (
    <section>
      <LandingBanner />
      <BookingModal />
      <ClinicCenters />
      <WhyUs />

      <div className='fixed bottom-2 min-w-full z-50'>
        <MiddleBar />
      </div>
    </section>
  )
}
