import React from 'react'
import buildingimg from '../../../assets/about_bumrungrad/Layout-Bumrungrad-Directory_Online_EN_Artboard-1.jpg'
import clinicimg from '../../../assets/about_bumrungrad/Bumrungrad_Clinic.jpg'
import resourceimg from '../../../assets/about_bumrungrad/Bumrungrad_Human-Resources.jpg'
import roomimg from '../../../assets/about_bumrungrad/Bumrungrad_room.jpg'
import bumrunCenterimg from '../../../assets/about_bumrungrad/Bumrungrad_Center.jpg'
import techimg from '../../../assets/about_bumrungrad/Bumrungrad_Technology.jpg'
import internimg from '../../../assets/about_bumrungrad/Bumrungrad_inter.jpg'
import responimg from '../../../assets/about_bumrungrad/Bumrungrad_Social-Responsibility.jpg'
const FactSheet = () => {
  return (
    <section className='mx-5 md:container md:mx-auto'>
      <div className='h-[20vh] md:h-[30vh] lg:h-[50vh] bumrungrand-back relative flex justify-center items-center'>
        <div className='absolute top-0 h-full w-full bg-black/60'></div>
        <h1 className='uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10'>
          Bumrungrad Fact Sheet
        </h1>
      </div>
      <div className='mx-5 my-10'>
        <h1 className='text-blue text-xl md:text-2xl font-semibold'>
          Bumrungrad Fact Sheet
        </h1>
        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>Mission</h1>
          <hr />
        </div>
        <p className='text-justify'>
          Bumrungrad aspires to deliver innovative clinical and service
          experiences, accomplish operational excellence and establish
          transdisciplinary care teams with quality and humanized care.
        </p>
        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>Ownership</h1>
          <hr />
        </div>
        <p className='text-justify'>
          Bumrungrad Hospital is a public company traded on the Stock Exchange
          of Thailand and managed by a multi-national team of experienced
          medical professionals and hospital administrators.
        </p>

        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>
            Main Hospital Facility (opened 1997)
          </h1>
          <hr />
        </div>
        <ol className='pl-6'>
          <li className='list-disc mt-2'>
            One of the largest private hospitals in Southeast Asia{' '}
          </li>
          <li className='list-disc mt-2'>
            12 stories with underground parking
          </li>
          <li className='list-disc mt-2'>70,262 square meters</li>
          <li className='list-disc mt-2'>Fully licensed medical heliport</li>
          <li className='list-disc mt-2'>
            Hospital-wide Wi-Fi network coverage
          </li>
        </ol>
        <div className='mt-4'>
          <img src={buildingimg} alt='' srcset='' />
        </div>
      </div>
      <div className='mx-5 my-10'>
        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>
            Outpatient Clinic Facility (opened 2008)
          </h1>
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
          <li className='list-disc mt-2'>Patient Volumes & Revenues</li>
          <li className='list-[square] ml-9 mt-2'>
            Over 1.1 million patients treated per year (OPD and IPD)
          </li>
          <li className='list-[square] ml-9 mt-2'>
            Over 520,000 are international patients, from over 190 different
            countries
          </li>
          <li className='list-[square] ml-9 mt-2'>
            Over USD 546 million annual turnover in 2018
          </li>
        </ol>
        <div className='mt-4'>
          <img src={clinicimg} alt='' srcset='' />
        </div>
        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>
            Human Resources
          </h1>
          <hr />
        </div>
        <ol className='pl-6'>
          <li className='list-disc mt-2'>International management team</li>
          <li className='list-disc mt-2'>Over 4,800 employees</li>
          <li className='list-disc mt-2'>
            Over 1,200 physicians and dentists, many with international
            training/certification
          </li>
          <li className='list-disc mt-2'>Fully licensed medical heliport</li>
          <li className='list-disc mt-2'>Over 900 nurses</li>
        </ol>
        <div className='mt-4'>
          <img src={resourceimg} alt='' srcset='' />
        </div>
        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>
            Inpatient Capacities
          </h1>
          <hr />
        </div>
        <ol className='pl-6'>
          <li className='list-disc mt-2'>580 Inpatient Beds include :</li>
          <li className='list-[square] ml-9 mt-2'>
            Medical/Surgical/OB/Pediatrics
          </li>
          <li className='list-[square] ml-9 mt-2'>
            Adult Intensive Care (ICU)
          </li>
          <li className='list-[square] ml-9 mt-2'>Cardiac Care (CCU)</li>
          <li className='list-[square] ml-9 mt-2'>Pediatric Intensive Care</li>
          <li className='list-[square] ml-9 mt-2'>
            Level IV Neonatal Intensive Care
          </li>
          <li className='list-disc mt-2'>
            Single Deluxe Rooms, Premier Atrium Deluxe, Premier Royal Suites, 2
            Bedded, and 4 Bedded
          </li>
          <li className='list-disc mt-2'>
            Wi-Fi Connection: a wide selection of television channels as well as
            the hospital’s information and services
          </li>
        </ol>
        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>
            Outpatient Facilities
          </h1>
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
          <img src={roomimg} alt='' srcset='' />
        </div>
        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>
            Outpatient Clinics, Centers and Programs
          </h1>
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
          <li className='list-disc mt-2'>Women's Center</li>
        </ol>
        <div className='mt-4'>
          <img src={bumrunCenterimg} alt='' srcset='' />
        </div>
        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>
            Special Facilities and Services
          </h1>
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
          <h1 className='text-[16px] py-3 text-blue font-medium'>
            International Referral Offices
          </h1>
          <hr />
        </div>
        <p className='text-justify'>
          Australia, Bahrain, Bangladesh, Cambodia, Chad, China, Ethiopia, Hong
          Kong, Indonesia, Kenya, Kuwait, Laos, Mongolia, Myanmar, Nepal, Oman,
          Pakistan, Qatar, Russia, Sudan, UAE, Vietnam and Virtual{' '}
        </p>
        <div className='mt-4'>
          <img src={techimg} alt='' srcset='' />
        </div>
        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>
            Special International Services
          </h1>
          <hr />
        </div>
        <ol className='pl-6'>
          <li className='list-disc mt-2'>Over 150 interpreters,</li>
          <li className='list-disc mt-2'>
            International/airport concierge service,
          </li>
          <li className='list-disc mt-2'>Embassy assistance,</li>
          <li className='list-disc mt-2'>VIP airport transfers</li>
          <li className='list-disc mt-2'>E-mail contact center,</li>
          <li className='list-disc mt-2'>
            International insurance coordination and international medical
            coordinators,
          </li>
          <li className='list-disc mt-2'>Visa extension counter,</li>
          <li className='list-disc mt-2'>
            Muslim prayer room with 300 person capacity
          </li>
        </ol>
        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>
            Quality, Accreditations, Certifications and Recognitions
          </h1>
          <hr />
        </div>
        <ol className='pl-6'>
          <li className='list-disc mt-2'>
            The first private hospital awarded Thailand Hospital Accreditation
            (1999)
          </li>
          <li className='list-disc mt-2'>
            Asia’s first hospital accredited by the US-based Joint Commission
            International (JCI) in 2002.
          </li>
          <li className='list-disc mt-2'>
            Reaccredited by the JCI in 2005, 2008, 2011, 2014, and 2017 2020
          </li>
          <li className='list-disc mt-2'>
            Thailand’s Model Organization on Labor Relations Management Award by
            the Ministry of Labor
          </li>
          <li className='list-disc mt-2'>
            First hospital in Thailand to receive accreditation from the College
            of American Pathologists (CAP) – Gold standard of operational
            excellence, for its clinical laboratory
          </li>
          <li className='list-disc mt-2'>
            First hospital in Asia to receive Pathway to Excellence® by American
            Nurse Credentialing Center (ANCC) – the positive practice
            environment for nurses by valuing nurses’ contributions as patient
            care partners
          </li>
          <li className='list-disc mt-2'>
            Center of Excellence Award, by CSSD – Award for the best sterilizing
            process for instrument and medical device
          </li>
          <li className='list-disc mt-2'>
            Global Health and Travel Magazine Awards:
          </li>
          <li className='list-disc mt-2'>
            Medical Tourism Hospital of the Year in Asia Pacific 2017 and 2018,
          </li>
          <li className='list-disc mt-2'>
            Hospital of the Year Thailand 2018,
          </li>
          <li className='list-disc mt-2'>
            Smart Hospital of the Year in Asia Pacific 2018,
          </li>
          <li className='list-disc mt-2'>
            Transplant Service Provider of the Year in Asia Pacific 2018,
          </li>
          <li className='list-disc mt-2'>
            Orthopaedic Service Provider of the Year in Asia 2018,
          </li>
          <li className='list-disc mt-2'>
            ENT Service Provider of the Year in Asia Pacific 2018,
          </li>
          <li className='list-disc mt-2'>
            Cosmetic Surgery Provider of the Year in Asia Pacific 2018,
          </li>
          <li className='list-disc mt-2'>
            Cardiology Service Provider of the Year in Asia Pacific 2018
          </li>
          <li className='list-disc mt-2'>
            First hospital in the world outside the United States to achieve
            Global Healthcare Accreditation (GHA) with Excellence 2017 ,
            Reaccredited in 2021
          </li>
          <li className='list-disc mt-2'>
            Hospital of the Year – Thailand awarded by Healthcare Asia 2018
          </li>
          <li className='list-disc mt-2'>
            Most Trusted Hospital – Thailand awarded by Thai business Excellence
            Awards 2018
          </li>
          <li className='list-disc mt-2'>
            First in Asia – Center of Excellence for Managing Infection Risk
            (MIR) Standard, by DNV-GL – The management of infection risk during
            the delivery of outpatient diagnostic, surgical, therapeutic and
            rehabilitation care and inpatient medical, surgical, maternity care
          </li>
          <li className='list-disc mt-2'>
            First hospital in the world to achieve Certification of Conformance
            with GHA COVID-19 Guidelines for Medical Travel Programs
          </li>
        </ol>
        <div className='mt-4'>
          <img src={internimg} alt='' srcset='' />
        </div>
        <div className='my-10'>
          <hr />
          <h1 className='text-[16px] py-3 text-blue font-medium'>
            Social Responsibility
          </h1>
          <hr />
        </div>
        <p className='text-justify'>
          The Bumrungrad Hospital Foundation was established in 1990 and is
          dedicated to providing healthcare to underprivileged Thai residents.
          The Foundation has provided over 100,000 Thais with free services
          ranging from check-up programs to life-saving surgery for children
          with defective hearts; as well as providing no-cost treatments to
          those in need of knee surgery through the “Knee Replacement Surgery
          Program.” For five consecutive years, the AMCHAM has honored
          Bumrungrad International for their commitment to social welfare,
          awarding Bumrungrad International with the AMCHAM “Corporate Social
          Responsibility Excellence Recognition – Gold Level” Award in 2013,
          2014, 2015, 2016, and 2017.
        </p>
        <div className='mt-4'>
          <img src={responimg} alt='' srcset='' />
        </div>
      </div>
    </section>
  )
}

export default FactSheet
