import React from 'react'
import buildingimg from '../../../assets/about_bumrungrad/FactSheet/Blue And White Clean Medical Center Instagram Post.png'
import clinicimg from '../../../assets/about_bumrungrad/Bumrungrad_Clinic.jpg'
import resourceimg from '../../../assets/about_bumrungrad/Bumrungrad_Human-Resources.jpg'
import roomimg from '../../../assets/about_bumrungrad/Bumrungrad_room.jpg'
import bumrunCenterimg from '../../../assets/about_bumrungrad/Bumrungrad_Center.jpg'
import techimg from '../../../assets/about_bumrungrad/Bumrungrad_Technology.jpg'
import internimg from '../../../assets/about_bumrungrad/Bumrungrad_inter.jpg'
import responimg from '../../../assets/about_bumrungrad/Bumrungrad_Social-Responsibility.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async'
const FactSheet = () => {
  return (
    <section className='mx-5 md:container md:mx-auto'>
      <HelmetProvider>
        {' '}
        <Helmet>
          <meta charSet='utf-8' />
          <title>
            Bumrungrad Hospital: Fact Sheet & Services | Your Health Journey
          </title>
          <meta
            name='description'
            content="Discover Bumrungrad International Hospital's Services & Facts for exceptional care. Start your health journey with our comprehensive offerings.
"
          />
          <link
            rel='canonical'
            href='https://bumrungraddiscover.com/about_factsheet'
          />
        </Helmet>
      </HelmetProvider>
      <div className='h-[20vh] md:h-[30vh] lg:h-[50vh] bumrungrand-back relative flex justify-center items-center'>
        <div className='absolute top-0 h-full w-full bg-black/60'></div>
        <h1 className='uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10'>
          Factsheet
        </h1>
      </div>
      <div className='mx-5 my-10'>
        <h2 className='text-blue text-xl md:text-2xl font-semibold'>
          Bumrungrad Fact Sheet:
        </h2>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>Mission:</p>
          <hr />
        </div>
        <p className='text-justify'>
          Bumrungrad International Hospital aspires to deliver innovative
          clinical and service experiences, accomplish operational excellence
          and establish transdisciplinary care teams with quality and humanized
          care
        </p>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>Ownership:</p>
          <hr />
        </div>
        <p className='text-justify'>
          Bumrungrad International Hospital is a public company traded on the
          Stock Exchange of Thailand and managed by a multi-national team of
          experienced medical professionals and hospital administrators..
        </p>

        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Main Hospital Facility & services (opened 1997):
          </p>
          <hr />
        </div>
        <ol className='pl-6 list-decimal'>
          <li className=' mt-2'>
            One of the largest private hospitals in Southeast Asia
          </li>
          <li className=' mt-2'>12 stories with underground parking</li>
          <li className=' mt-2'>70,262 square meters</li>
          <li className=' mt-2'>Fully licensed medical heliport</li>
          <li className=' mt-2'>Hospital-wide Wi-Fi network coverage</li>
        </ol>
        <div className='mt-4'>
          <img
            src={buildingimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
        </div>
      </div>
      <div className='mx-5 my-10'>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Outpatient Clinic Facility & Services (opened 2008):
          </p>
          <hr />
        </div>
        <ol className='pl-6'>
          <li className='list-disc mt-2'>
            One of the world’s largest private sector outpatient clinics
          </li>
          <li className='list-disc mt-2'>
            12 stories with underground parking
          </li>
          <li className='list-disc mt-2'>21 stories plus 700 parking spaces</li>
          <li className='list-disc mt-2'>57,206 square meters</li>
          <li className='list-disc mt-2'>
            One-stop convenience, with cashier and pharmacy stations on each
            clinic floor
          </li>
          <li className='list-disc mt-2'>
            Technology features such as Wi-Fi; LCD multi-language directories
            and TV; an automated lab to provide faster, more reliable results;
            online registration, medical records and diagnostic images, allowing
            doctors immediate access to patient information from their exam room
            computers
          </li>
          <li className='list-disc mt-2'>
            A spacious modern 10th floor Sky Lobby featuring a premium member
            lounge, international medical coordination, business and visa
            extension services, first-time registration services, Starbucks, and
            a bookstore
          </li>
          <li className='list-disc mt-2'>Patient Volumes & Revenues –</li>
          <ol className='list-decimal'>
            <li className=' ml-9 mt-2'>
              Over 1.1 million patients treated per year (OPD and IPD)
            </li>
            <li className=' ml-9 mt-2'>
              Over 520,000 are international patients, from over 190 different
              countries
            </li>
            <li className=' ml-9 mt-2'>
              Over USD 546 million annual turnover in 2018
            </li>
          </ol>
        </ol>
        <div className='mt-4'>
          <img
            src={clinicimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
        </div>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Human Resources:
          </p>
          <hr />
        </div>
        <ol className='pl-6 list-decimal'>
          <li className=' mt-2'>International management team</li>
          <li className=' mt-2'>Over 4,800 employees</li>
          <li className=' mt-2'>
            Over 1,200 physicians and dentists, many with international
            training/certification
          </li>
          <li className=' mt-2'>Fully licensed medical heliport</li>
          <li className=' mt-2'>Over 900 nurses</li>
        </ol>
        <div className='mt-4'>
          <img
            src={resourceimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
        </div>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Inpatient Capacities:
          </p>
          <hr />
        </div>
        <ol className='pl-6 list-decimal'>
          <li className=' mt-2'>580 Inpatient Beds include :</li>
          <ol className='list-decimal'>
            <li className=' ml-9 mt-2'>Medical/Surgical/OB/Pediatrics</li>
            <li className=' ml-9 mt-2'>Adult Intensive Care (ICU)</li>
            <li className=' ml-9 mt-2'>Cardiac Care (CCU)</li>
            <li className=' ml-9 mt-2'>Pediatric Intensive Care</li>
            <li className=' ml-9 mt-2'>Level IV Neonatal Intensive Care</li>
          </ol>

          <li className=' mt-2'>
            Single Deluxe Rooms, Premier Atrium Deluxe, Premier Royal Suites, 2
            Bedded, and 4 Bedded
          </li>
          <li className=' mt-2'>
            Wi-Fi Connection: a wide selection of television channels as well as
            the hospital’s information and services
          </li>
        </ol>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Outpatient Facilities:
          </p>
          <hr />
        </div>
        <ol className='pl-6'>
          <li className='list-disc mt-2'>275 Examination Suites</li>
          <li className='list-disc mt-2'>
            Ambulance and mobile critical care fleet
          </li>
          <li className='list-disc mt-2'>
            24-hour emergency care, including emergency cardiac catheterization
          </li>
          <li className='list-disc mt-2'>
            A capacity of 5,500 outpatients per day
          </li>
          <li className='list-disc mt-2'>Outpatient Surgery Center</li>
        </ol>
        <div className='mt-4'>
          <img
            src={roomimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
        </div>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Outpatient Clinics, Centers and Programs:
          </p>
          <hr />
        </div>
        <ol className='pl-6'>
          <li className='list-disc mt-2'>Allergy Center</li>
          <li className='list-disc mt-2'>Arrhythmia Center</li>
          <li className='list-disc mt-2'>Behavioral Health Center</li>
          <li className='list-disc mt-2'>Breastfeeding Clinic</li>
          <li className='list-disc mt-2'>
            Bumrungrad Joint Replacement Center
          </li>
          <li className='list-disc mt-2'>Children’s Center</li>
          <li className='list-disc mt-2'>Dental Center</li>
          <li className='list-disc mt-2'>Diabetes Center</li>
          <li className='list-disc mt-2'>Diagnostic Center</li>
          <li className='list-disc mt-2'>Dialysis Center</li>
          <li className='list-disc mt-2'>Digestive Disease (GI) Center</li>
          <li className='list-disc mt-2'>Ear, Nose and Throat Center</li>
          <li className='list-disc mt-2'>Eye Center</li>
          <li className='list-disc mt-2'>Health Screening Center</li>
          <li className='list-disc mt-2'>Hearing and Balance Clinic</li>
          <li className='list-disc mt-2'>Heart (Cardiology) Center</li>
          <li className='list-disc mt-2'>Horizon Regional Cancer Center</li>
          <li className='list-disc mt-2'>Hyperbaric Oxygen Therapy</li>
          <li className='list-disc mt-2'>Hypertension Clinic</li>
          <li className='list-disc mt-2'>Intensive Care Unit (ICU)</li>
          <li className='list-disc mt-2'>Liver Center</li>
          <li className='list-disc mt-2'>Medical Clinic</li>
          <li className='list-disc mt-2'>Memory Clinic</li>
          <li className='list-disc mt-2'>Men’s Center</li>
          <li className='list-disc mt-2'>Nephrology (Kidney) Center</li>
          <li className='list-disc mt-2'>Neuroscience Center</li>
          <li className='list-disc mt-2'>New Life Healthy Aging Clinic</li>
          <li className='list-disc mt-2'>Orthopedic Center</li>
          <li className='list-disc mt-2'>Pain Center</li>
          <li className='list-disc mt-2'>
            Parkinson’s Disease and Movement Disorders Clinic
          </li>
          <li className='list-disc mt-2'>Perinatal Center</li>
          <li className='list-disc mt-2'>
            Physical Therapy and Rehabilitation Center
          </li>
          <li className='list-disc mt-2'>Plastic (Cosmetic) Surgery Center</li>
          <li className='list-disc mt-2'>Pulmonary (Lung) Center</li>
          <li className='list-disc mt-2'>Refractive Surgery Center</li>
          <li className='list-disc mt-2'>Robotic Scoliosis Center</li>
          <li className='list-disc mt-2'>Robotic Surgery Center</li>
          <li className='list-disc mt-2'>Skin (Dermatology) Center</li>
          <li className='list-disc mt-2'>Sleep Lab</li>
          <li className='list-disc mt-2'>Scoliosis Center</li>
          <li className='list-disc mt-2'>Spine Institute</li>
          <li className='list-disc mt-2'>Sports Medicine Center</li>
          <li className='list-disc mt-2'>Surgical Clinic</li>
          <li className='list-disc mt-2'>Travel Medicine Center</li>
          <li className='list-disc mt-2'>Urology Center</li>
          <li className='list-disc mt-2'>
            VitalLife Scientific Wellness Center
          </li>
          <li className='list-disc mt-2'>Women’s Center</li>
        </ol>
        <div className='mt-4'>
          <img
            src={bumrunCenterimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
        </div>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Special Facilities and Services:
          </p>
          <hr />
        </div>
        <ol className='pl-6'>
          <li className='list-disc mt-2'>
            2 cardiac catheterization laboratories
          </li>
          <li className='list-disc mt-2'>2 cardiac operating theaters</li>
          <li className='list-disc mt-2'>2 cardiac operating theaters</li>
          <li className='list-disc mt-2'>19 operating theaters</li>
          <li className='list-disc mt-2'>Automated lab on-site</li>
          <li className='list-disc mt-2'>Brachytherapy</li>
          <li className='list-disc mt-2'>Bone marrow transplantation unit</li>
          <li className='list-disc mt-2'>Electrophysiology lab</li>
          <li className='list-disc mt-2'>Hyperbaric oxygen therapy unit</li>
          <li className='list-disc mt-2'>Interventional radiology</li>
          <li className='list-disc mt-2'>
            MAKO Robot Arthroplasty/MAKOplasty®
          </li>
          <li className='list-disc mt-2'>
            Mazor X Robot-assisted Spine Surgery
          </li>
          <li className='list-disc mt-2'>MRI, CT and Lithotripsy</li>
          <li className='list-disc mt-2'>Neonatal critical care transport</li>
          <li className='list-disc mt-2'>Nuclear medicine</li>
          <li className='list-disc mt-2'>PACS radiology</li>
          <li className='list-disc mt-2'>PET/CT scanner</li>
          <li className='list-disc mt-2'>Pharmacy robot</li>
          <li className='list-disc mt-2'>Precision Medicine for Oncology</li>
          <li className='list-disc mt-2'>
            Radiation therapy (linear accelerator)
          </li>
          <li className='list-disc mt-2'>
            Robot-assisted Prostate Cancer and Kidney Cancer Surgery using da
            Vinci System
          </li>
          <li className='list-disc mt-2'>Sleep lab</li>
          <li className='list-disc mt-2'>Surgical navigation system</li>
          <li className='list-disc mt-2'>
            VitalLife Scientific Wellness Center
          </li>
          <li className='list-disc mt-2'>
            VMAT (Volumetric Modulated Arc Therapy)
          </li>
        </ol>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            International Referral Offices:
          </p>
          <hr />
        </div>
        <p className='text-justify'>
          Australia, Bahrain, Bangladesh, Cambodia, Chad, China, Ethiopia, Hong
          Kong, Indonesia, Kenya, Kuwait, Laos, Mongolia, Myanmar, Nepal, Oman,
          Pakistan, Qatar, Russia, Sudan, UAE, Vietnam and Virtual.
        </p>
        <div className='mt-4'>
          <img
            src={techimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
        </div>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Special International Services:
          </p>
          <hr />
        </div>
        <ol className='pl-6 list-decimal'>
          <li className=' mt-2'>Over 150 interpreters,</li>
          <li className=' mt-2'>International/airport concierge service,</li>
          <li className=' mt-2'>Embassy assistance,</li>
          <li className=' mt-2'>VIP airport transfers</li>
          <li className=' mt-2'>E-mail contact center,</li>
          <li className=' mt-2'>
            International insurance coordination and international medical
            coordinators,
          </li>
          <li className=' mt-2'>Visa extension counter,</li>
          <li className=' mt-2'>Muslim prayer room with 300 person capacity</li>
        </ol>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Quality, Accreditations, Certifications and Recognitions:
          </p>
          <hr />
        </div>
        <ol className='pl-6 list-decimal'>
          <li className=' mt-2'>
            The first private hospital awarded Thailand Hospital Accreditation
            (1999)
          </li>
          <li className=' mt-2'>
            Asia’s first hospital accredited by the US-based Joint Commission
            International (JCI) in 2002.
          </li>
          <li className=' mt-2'>
            Reaccredited by the JCI in 2005, 2008, 2011, 2014, and 2017 2020
          </li>
          <li className=' mt-2'>
            Thailand’s Model Organization on Labor Relations Management Award by
            the Ministry of Labor
          </li>
          <li className=' mt-2'>
            First hospital in Thailand to receive accreditation from the College
            of American Pathologists (CAP) – Gold standard of operational
            excellence, for its clinical laboratory
          </li>
          <li className=' mt-2'>
            First hospital in Asia to receive Pathway to Excellence® by American
            Nurse Credentialing Center (ANCC) – the positive practice
            environment for nurses by valuing nurses’ contributions as patient
            care partners
          </li>
          <li className=' mt-2'>
            Center of Excellence Award, by CSSD – Award for the best sterilizing
            process for instrument and medical device
          </li>
          <li className=' mt-2'>Global Health and Travel Magazine Awards:</li>
          <li className=' mt-2'>
            Medical Tourism Hospital of the Year in Asia Pacific 2017 and 2018,
          </li>
          <li className=' mt-2'>Hospital of the Year Thailand 2018,</li>
          <li className=' mt-2'>
            Smart Hospital of the Year in Asia Pacific 2018,
          </li>
          <li className=' mt-2'>
            Transplant Service Provider of the Year in Asia Pacific 2018,
          </li>
          <li className=' mt-2'>
            Orthopaedic Service Provider of the Year in Asia 2018,
          </li>
          <li className=' mt-2'>
            ENT Service Provider of the Year in Asia Pacific 2018,
          </li>
          <li className=' mt-2'>
            Cosmetic Surgery Provider of the Year in Asia Pacific 2018,
          </li>
          <li className=' mt-2'>
            Cardiology Service Provider of the Year in Asia Pacific 2018
          </li>
          <li className=' mt-2'>
            First hospital in the world outside the United States to achieve
            Global Healthcare Accreditation (GHA) with Excellence 2017 ,
            Reaccredited in 2021
          </li>
          <li className=' mt-2'>
            Hospital of the Year – Thailand awarded by Healthcare Asia 2018
          </li>
          <li className=' mt-2'>
            Most Trusted Hospital – Thailand awarded by Thai business Excellence
            Awards 2018
          </li>
          <li className=' mt-2'>
            First in Asia – Center of Excellence for Managing Infection Risk
            (MIR) Standard, by DNV-GL – The management of infection risk during
            the delivery of outpatient diagnostic, surgical, therapeutic and
            rehabilitation care and inpatient medical, surgical, maternity care
          </li>
          <li className=' mt-2'>
            First hospital in the world to achieve Certification of Conformance
            with GHA COVID-19 Guidelines for Medical Travel Program
          </li>
        </ol>
        <div className='mt-4'>
          <img
            src={internimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
        </div>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>
            Social Responsibility:
          </p>
          <hr />
        </div>
        <p className='text-justify'>
          The Bumrungrad International Hospital Foundation was established in
          1990 and is dedicated to providing healthcare to underprivileged Thai
          residents. The Foundation has provided over 100,000 Thais with free
          services ranging from check-up programs to life-saving surgery for
          children with defective hearts; as well as providing no-cost
          treatments to those in need of knee surgery through the “Knee
          Replacement Surgery Program.” For five consecutive years, the AMCHAM
          has honored Bumrungrad International for their commitment to social
          welfare, awarding Bumrungrad International with the AMCHAM “Corporate
          Social Responsibility Excellence Recognition – Gold Level” Award in
          2013, 2014, 2015, 2016, and 2017.
        </p>
        <div className='mt-4'>
          <img
            src={responimg}
            alt='Bumrungrad International Hospital'
            srcset=''
          />
        </div>
      </div>
    </section>
  )
}

export default FactSheet
