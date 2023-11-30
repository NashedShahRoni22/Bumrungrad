import React from 'react'
import missionVissionimg from '../../../assets/about_bumrungrad/Bumrungrad_MissionVission.jpg'
import environmentimg from '../../../assets/about_bumrungrad/Bumrungrad_Environmental-(1).jpg'
const VissionMisson = () => {
  return (
    <section className='mx-5 md:container md:mx-auto'>
      <div className='h-[20vh] md:h-[30vh] lg:h-[50vh] vissionMission-back relative flex justify-center items-center'>
        <div className='absolute top-0 h-full w-full bg-black/60'></div>
        <h1 className='uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10'>
          Vision/Mission and Values
        </h1>
      </div>
      {/* new content here */}
      <div className='mx-5 my-10'>
        <h2 className='text-blue text-xl md:text-2xl font-semibold'>
          Our Vision/Mission and Values
        </h2>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>VISION</p>
          <hr />
        </div>
        <p className='text-justify'>
          Bumrungrad International Hospital aims to be the most trusted
          healthcare and wellness destination
        </p>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>MISSION</p>
          <hr />
        </div>
        <p className='text-justify'>Deliver excellence in clinical services</p>
        <p className='text-justify'>
          Transform hospital operation with innovation and advanced technologies
        </p>
        <p className='text-justify'>
          Build a strong foundation for growth and sustainability
        </p>
        <div className='my-10'>
          <hr />
          <p className='text-[16px] py-3 text-blue font-medium'>CORE VALUES</p>
          <hr />
        </div>
        <ol className='pl-6'>
          <li className='list-disc mt-2'>Inclusion </li>
          <li className='list-disc mt-2'>Agility</li>
          <li className='list-disc mt-2'>Innovation</li>
          <li className='list-disc mt-2'>Caring</li>
        </ol>
      </div>
      <div className='mx-5 my-10'>
        <h2 className='text-blue text-xl md:text-2xl font-semibold my-8'>
          Patient and Staff Safety Statement
        </h2>
        <p className='text-justify mt-4'>
          Everyone at Bumrungrad Hospital PCL has responsibility for the safety
          of our patients and staff. The Hospital Governing Board has the
          overall responsibility of directing the commitment to safety. The
          Executive and Management teams have the responsibility to oversee,
          guide and implement the safety programs at Bumrungrad; however,
          everyone at Bumrungrad is responsible for safety. Safety is a team
          effort that is at the core of our business and central to our success
          and competitiveness.
        </p>
        <p className='mt-4'>We believe that :</p>
        <ol className='pl-6 mt-2'>
          <li className='list-decimal mt-1'>
            Safety shall never be compromised
          </li>
          <li className='list-decimal mt-1'>All errors are preventable.</li>
          <li className='list-decimal mt-1'>
            Nothing is more important to Bumrungrad than the safety of our
            patients and our staff.
          </li>
        </ol>
        <div className='ml-4 mt-4'>
          <img src={missionVissionimg} alt='Bumrungrad Hospital' srcset='' />
        </div>
      </div>
      <div className='mx-5 my-10'>
        <h2 className='text-blue text-xl md:text-2xl font-semibold'>
          Quality Statement
        </h2>
        <p className='text-justify mt-4'>
          Bumrungrad Hospital PCL is committed to providing “World Class”
          services by using the Malcolm Baldrige National Quality and Magnet
          criteria as the framework for achieving our overall organizational
          performance objectives. We benchmark and validate our performance
          through internationally recognized accrediting and certification
          bodies such as Joint Commission International (JCI), Hospital
          Accreditation (A-HA) and The College of American Pathologists (CAP)
          for Safety & Quality towards patient care excellence.
        </p>
        <h2 className='text-blue text-xl md:text-2xl font-semibold mt-10'>
          Environmental Statement
        </h2>
        <p className='text-justify mt-4'>
          Bumrungrad International is committed to protecting the global
          environment and to conserving energy and natural resources. We support
          efforts to maintain and promote the health and safety of the community
          and we participate in activities supporting these principles.
        </p>
        <h2 className='text-blue text-xl md:text-2xl font-semibold mt-10'>
          Environmental Statement Guiding Principles
        </h2>
        <ol className='pl-6 mt-6'>
          <li className='list-decimal mt-1'>
            The Hospital will establish environmental, health, and safety
            policies that comply with government regulations and world standards
            and ensure that staff and contractors are properly educated and
            trained in these policies.
          </li>
          <li className='list-decimal mt-1'>
            Every staff member and contractor on the Hospital's premises is
            expected to follow the Hospital's environmental policies and report
            any environmental, health or safety concerns to management to take
            appropriate actions.
          </li>
          <li className='list-decimal mt-1'>
            We will minimize the environmental impact of the hospital's
            operations on the neighboring communities due to such potential
            hazards as infectious waste water management, etc.
          </li>
          <li className='list-decimal mt-1'>
            We will respect the use of natural resources by participating in
            energy conservation, initiative and supporting the recycling of
            materials.
          </li>
          <li className='list-decimal mt-1'>
            We will conduct stringent audits and reviews of the Hospital's
            compliance with our environment policies and strive to continuously
            improve the environment.
          </li>
        </ol>
        <div className='ml-4 mt-8'>
          <img src={environmentimg} alt='Bumrungrad Hospital' srcset='' />
        </div>
      </div>
    </section>
  )
}

export default VissionMisson
