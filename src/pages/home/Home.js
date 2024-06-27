import React from 'react'
import LandingBanner from './LandingBanner'

import WhyUs from './WhyUs'
import MiddleBar from '../../shared/FixedBar/MiddleBar'
import BookingModal from './BookingModal'

import ClinicCenters from './ClinicCenters'

import News from './News'

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
            Bumrungrad International Hospital-The No.1 Hospital in Thailand
          </title>
          <meta
            name='description'
            content='A leading hospital in Thailand, accredited by JCI, has been ranked among the top 10 global medical destinations by Newsweek and recognized as a top 4 pioneer in medical tourism by The Wall Street Journal.
'
          />
          <link rel='canonical' href='https://discoverinternationalmedicalservice.com/' />
        </Helmet>
      </HelmetProvider>

      <LandingBanner />
      <Disclaimer1 />
      <BookingModal />
      <HomePackages />
      <ClinicCenters />
      <WhyUs />
      <News />
      <HomeContact />
      <div className='fixed bottom-0 md:bottom-2 min-w-full z-50'>
        <MiddleBar />
      </div>
    </section>
  )
}
