import React from 'react'
import '../../../App.css'
import careimg from '../../../assets/about_bumrungrad/Bumrungrad_AboutUS.jpg'
import awardimg from '../../../assets/about_bumrungrad/Bumrungrad  Hospital_Bumrungrad_Award.jpg'
import specialtiesimg from '../../../assets/about_bumrungrad/Bumrungrad_specialties-2022.jpg'
import inovationsimg from '../../../assets/about_bumrungrad/Bumrungrad_inovation.jpg'
import careingimg from '../../../assets/about_bumrungrad/Bumrungrad_Caring.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async'
const Bumrungrad = () => {
  return (
    <section className='mx-5 md:container md:mx-auto'>
      <HelmetProvider>
        {' '}
        <Helmet>
          <meta charSet='utf-8' />
          <title>
            Learn About Bumrungrad Hospital: Excellence in Healthcare
          </title>
          <meta
            name='description'
            content="Explore Bumrungrad International Hospital's excellence in healthcare. Discover cutting-edge services and compassionate care for your well-being.
"
          />
          <link
            rel='canonical'
            href='https://bumrungraddiscover.com/about_bumrungrad'
          />
        </Helmet>
      </HelmetProvider>
      <div className='h-[20vh] md:h-[30vh] lg:h-[50vh] bumrungrand-back relative flex justify-center items-center'>
        <div className='absolute top-0 h-full w-full bg-black/60'></div>
        <h1 className='uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10'>
          About Bumrungard International Hospital
        </h1>
      </div>

      {/* new content here */}
      <div className='mx-5 my-10'>
        <h2 className='text-blue text-xl md:text-2xl font-semibold'>
          World-class Healthcare
        </h2>
        <p className='text-justify mt-5'>
          Founded in 1980, Bumrungrad International Hospital has been a global
          pioneer in providing world-class healthcare services and international
          patient support for nearly four decades. Located in the heart of
          Bangkok, Thailand, a cosmopolitan megacity nicknamed “The City of
          Angels” and renowned for its culture of exceptional hospitality and
          delicious cuisine. Bumrungrad is an internationally accredited,
          multi-specialty hospital listed on the Stock Exchange of Thailand
          since 1989. One of the largest private hospitals in Southeast Asia,
          Bumrungrad International Hospital cares for over 1.1 million patients
          from more than 190 countries annually.
        </p>
      </div>
      <div className='mx-5 my-20'>
        <div>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>Milestones:</p>
          <hr />
        </div>
        <div className='mt-4'>
          <ol className='pl-6 list-decimal'>
            <li className=''>Opened 200 bed facility: September 17, 1980</li>
            <li className=' mt-2'>
              Listed on the Stock Exchange of Thailand: 1989
            </li>
            <li className=' mt-2'>
              Replacement hospital building commissioned: January 1, 1997
            </li>
            <li className=' mt-2'>
              Opening of the Bumrungrad International Clinic Building: May 2008
            </li>
            <li className=' mt-2'>
              Joint Commission International accreditation: Since February 2002
            </li>
            <li className=' mt-2'>
              Global Healthcare Accreditation with Excellence: September 2017
            </li>
          </ol>
          <div className='ml-4 mt-4'>
            <img
              src={careimg}
              alt='Bumrungrad International Hospital'
              srcset=''
            />
          </div>
        </div>
      </div>

      <div className='mx-5 my-20'>
        <div>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Collaboration of Expertise:​
          </p>
          <hr />
        </div>
        <div className='mt-4'>
          <p className='text-justify mt-5'>
            Bumrungrad International Hospital has set up multidisciplinary teams
            of experienced medical doctors, nurses, pharmacists, physical
            therapists, nutritionists, medical technologists and other
            professional staff to integrate quality treatment, making it a
            one-stop shop healthcare destination for all types of patients and
            complex care needs. Bumrungrad International Hospital employs over
            1,300 medical doctors and over 4,800 support professionals. A
            majority of the doctors have earned international board
            certifications from the United States, United Kingdom, Australia,
            Japan and other advanced economies well known for high medical and
            quality standards. The seamless collaboration of expertise between
            our medical teams allows for better treatments and outcomes for
            patients across more than 70 medical subspecialties.
          </p>
          <div className='ml-4 mt-4'>
            <img
              src={awardimg}
              alt='Bumrungrad International Hospital'
              srcset=''
            />
          </div>
        </div>
      </div>
      <div className='mx-5 my-20'>
        <div>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Quality, Safety with Measurable Results:​
          </p>
          <hr />
        </div>
        <div className='mt-4'>
          <p className='text-justify mt-5'>
            In 2002, Bumrungrad International Hospital was the first hospital in
            Asia to be accredited by the US-based Joint Commission International
            (JCI). The hospital has also been re-accredited five times
            consecutively. Bumrungrad also became the first hospital in Asia to
            be DNV GL MIR Certified for Infection Risk, and became the first
            non-US hospital to earn Global Healthcare Accreditation with
            Excellence designation from GHA, which signifies the highest
            international quality and safety standards for overseas patients
            traveling to Bumrungrad International Hospital for treatment and
            care. Through our consistent clinical standards and many
            international accreditations, Bumrungrad has demonstrated some of
            the highest clinical success rates and lowest infection rates in the
            region and world.
          </p>
          <div className='ml-4 mt-4'>
            <img
              src={specialtiesimg}
              alt='Bumrungrad International Hospital'
              srcset=''
            />
          </div>
        </div>
      </div>
      <div className='mx-5 my-20'>
        <div>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Innovation and Technology:​
          </p>
          <hr />
        </div>
        <div className='mt-4'>
          <p className='text-justify mt-5'>
            Bumrungrad International Hospital is a leader in medical technology
            and innovative patient healthcare services. Among the most recent
            advancements, Bumrungrad has expanded the Precision Medicine
            department which offers personalized cancer treatments and the
            latest breakthrough therapies mostly from the United States and
            Europe. Another cutting-edge technology we use is CardioInsight, a
            completely non-invasive diagnostics technology for diagnosing heart
            arrhythmias and the only active center in the Asia Pacific. In order
            to remain a leader in cutting-edge technology, Bumrungrad was the
            first IBM Watson for Oncology site in the world. IBM Watson, a
            machine-learning AI, assists physicians by analyzing patient data
            against thousands of historical cases, hundreds of medical journals
            and textbooks, the latest clinical trials, and more than 12 million
            pages of text. This innovation in technology allows doctors and
            specialists to compare their findings against big data and provide
            the most accurate treatments possible. What began as a surgical
            treatment for prostate cancer has now become the Bumrungrad Robotic
            Surgery Center. It utilizes state-of-the-art technologies for
            robotic-assisted surgery such as MAKOplasty©, Mazor X and the da
            Vinci System to allow for more consistency, accuracy and faster
            recovery times with less invasiveness for joint, spine and cancer
            patients.
          </p>
          <div className='ml-4 mt-4'>
            <img
              src={inovationsimg}
              alt='Bumrungrad International Hospital'
              srcset=''
            />
          </div>
        </div>
      </div>
      <div className='mx-5 my-20'>
        <div>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Compassionate Caring:​
          </p>
          <hr />
        </div>
        <div className='mt-4'>
          <p className='text-justify mt-5'>
            Compassionate caring is one of Bumrungrad International’s principle
            values. It has been featured by Newsweek, International Herald
            Tribune, Reader’s Digest, CBS 60 Minutes, The Financial Times and
            Inside Man on CNN. The reportage covers Bumrungrad’s quality
            treatment and medical healthcare abroad, placing it high on the list
            of medical tourism hospital destinations. Nearly all Bumrungrad
            doctors speak English, and the hospital employs more than 200
            interpreters to cover the language needs of patients from nearly any
            country. The patients and their families can receive end-to-end
            healthcare service from pick-up and drop-off logistics as well as
            hotel reservations on arrival through our Bumrungrad International
            Airport Representative Office at Suvarnabhumi Airport. Convenience
            plays another vital role at Bumrungrad and the hospital’s one-stop
            medical campus is able to provide diagnostic tests, specialty
            referrals, and treatment within days, not weeks, so international
            patients can get the care they need and return home sooner.
            Bumrungrad International Hospital also practices a one-price-policy
            for all patients healthcare services, meaning there is no difference
            in costs for local or international patients of any nationality.
            Through compassion, comfort, convenience and coordination,
            Bumrungrad goes the extra mile to ensure that every patient is
            treated equal and with care, no matter where they are from. That’s
            why the Thai name Bumrungrad means “care for the people.”
          </p>
          <div className='ml-4 mt-4'>
            <img
              src={careingimg}
              alt='Bumrungrad International Hospital'
              srcset=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bumrungrad
