import React from "react";
import missionVissionimg from "../../../assets/about_bumrungrad/PatientandStaffSafetyStatement.jpg";
import environmentimg from "../../../assets/about_bumrungrad/BumrungradEnvironmental.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
const VissionMisson = () => {
  return (
    <section className="mx-5 md:container md:mx-auto">
      <HelmetProvider>
        {" "}
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Bumrungrad Hospital: Unveiling Our Mission and Core Values
          </title>
          <meta
            name="description"
            content="Discover Bumrungrad International Hospital's mission and values, guiding a commitment to excellence in patient care. Your well-being is our top priority.
"
          />
          <link
            rel="canonical"
            href="https://discoverinternationalmedicalservice.com/about-vision-and-misson"
          />
        </Helmet>
      </HelmetProvider>
      <div className="h-[20vh] md:h-[30vh] lg:h-[50vh] vissionMission-back relative flex justify-center items-center">
        <div className="absolute top-0 h-full w-full bg-black/60"></div>
        <h1 className="uppercase text-xl text-center md:text-2xl lg:text-3xl font-bold text-white z-10">
          Vision & Mission
        </h1>
      </div>
      {/* new content here */}
      <div className="mx-5 my-10">
        <h2 className="text-blue text-xl md:text-2xl font-semibold">
          Our Vision, Mission and Values:
        </h2>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">VISION:</p>
          <hr />
        </div>
        <p className="text-justify">
          Our main goal at{" "}
          <Link
            className="font-semibold text-blue underline"
            to="https://discoverinternationalmedicalservice.com/"
          >
            Bumrungrad International Hospital
          </Link>{" "}
          is to be the leading source of confidence for health and wellness. Our
          dedication is based on our unwavering quest for perfection as we work
          to become the premier location for all-encompassing health and
          wellness services. Our goal is to reshape expectations by creating an
          environment where patients can receive top-notch medical care along
          with life-changing experiences that lead to long-term wellbeing. Our
          vision at Bumrungrad is connected with an unshakable commitment to
          gaining the trust of those we serve and making sure that each person’s
          health experience is met with unmatched assurance and confidence.
        </p>
        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">MISSION:</p>
          <hr />
        </div>
        <p className="text-justify">
          Our mission at{" "}
          <Link
            className="font-semibold text-blue underline"
            to="https://discoverinternationalmedicalservice.com/"
          >
            Bumrungrad International Hospital
          </Link>{" "}
          is multifaceted. Aim for unmatched quality in clinical services,
          pushing the boundaries of patient care. Utilise cutting-edge ideas and
          cutting-edge technologies to transform hospital operations and ensure
          effectiveness and efficiency. Build a solid foundation that supports
          expansion and guarantees the hospital’s long-term viability.
        </p>

        <div className="my-10">
          <hr />
          <p className="text-[16px] py-3 text-blue font-medium">CORE VALUES:</p>
          <hr />
        </div>
        <p>
          These four pillars—diversity, adaptability, creativity, and
          compassion—capsulate our core values. We promote diversity by
          embracing inclusivity and a wide range of viewpoints. Our nimble
          approach is characterised by agility, as we navigate problems with
          elegance and adaptability. We advance through innovation, which sparks
          interest and pushes limits. Our culture is interlaced with caring,
          fostering a climate in which understanding and assistance are valued.
          These fundamental principles remain constant as we commemorate our
          trip, forming our character and motivating all of our actions. They
          work together as the beating core of our company, leading us towards a
          time when cooperation and purpose are combined.
        </p>
      </div>
      <div className="mx-5 my-10">
        <h2 className="text-blue text-xl md:text-2xl font-semibold my-8">
          Patient and Staff Safety Statement:
        </h2>
        <p className="text-justify mt-4">
          Everyone at{" "}
          <Link
            className="font-semibold text-blue underline"
            to="https://discoverinternationalmedicalservice.com/"
          >
            Bumrungrad International Hospital
          </Link>{" "}
          PCL has responsibility for the safety of our patients and staff. The
          Hospital Governing Board has the overall responsibility of directing
          the commitment to safety. The Executive and Management teams have the
          responsibility to oversee, guide and implement the safety programs at
          Bumrungrad; however, everyone at Bumrungrad is responsible for safety.
          Safety is a team effort that is at the core of our business and
          central to our success and competitiveness.
        </p>
        <p className="mt-4">We believe that :</p>
        <ol className="pl-6 mt-2 list-decimal">
          <li className=" mt-1">Safety shall never be compromised</li>
          <li className=" mt-1">All errors are preventable.</li>
          <li className=" mt-1">
            The security of our patients and employees is our top priority at
            Bumrungrad.
          </li>
          <li className=" mt-1">
            <Link
              className="font-semibold text-blue underline"
              to="https://discoverinternationalmedicalservice.com/"
            >
              Bumrungrad International Hospital
            </Link>{" "}
          </li>
        </ol>
        <div className="ml-4 mt-4">
          <img
            src={missionVissionimg}
            alt="Bumrungrad International Hospital"
            srcset=""
          />
        </div>
      </div>
      <div className="mx-5 my-10">
        <h2 className="text-blue text-xl md:text-2xl font-semibold">
          Quality Statement:
        </h2>
        <p className="text-justify mt-4">
          <Link
            className="font-semibold text-blue underline"
            to="https://discoverinternationalmedicalservice.com/"
          >
            Bumrungrad International Hospital
          </Link>{" "}
          PCL is committed to providing “World Class” services by using the
          Malcolm Baldrige National Quality and Magnet criteria as the framework
          for achieving our overall organizational performance objectives.
          Through globally renowned accreditation and certifying organizations
          like Hospital Accreditation (A-HA), Joint Commission International
          (JCI), and The College of American Pathologists (CAP) for Safety &
          Quality toward patient care excellence, we measure and confirm our
          performance.
        </p>
        <h2 className="text-blue text-xl md:text-2xl font-semibold mt-10">
          Environmental Statement:
        </h2>
        <p className="text-justify mt-4">
          <Link
            className="font-semibold text-blue underline"
            to="https://discoverinternationalmedicalservice.com/"
          >
            Bumrungrad International Hospital
          </Link>{" "}
          is committed to protecting the global environment and conserving
          energy and natural resources. We engage in activities that uphold
          these ideals and support initiatives aimed at preserving and advancing
          the community's health and safety.
        </p>
        <h2 className="text-blue text-xl md:text-2xl font-semibold mt-10">
          Environmental Statement Guiding Principles:
        </h2>
        <ol className="pl-6 mt-6">
          <li className="list-decimal mt-1">
            The Hospital will establish environmental, health, and safety
            policies that comply with government regulations and world standards
            and ensure that staff and contractors are properly educated and
            trained in these policies.
          </li>
          <li className="list-decimal mt-1">
            Every staff member and contractor on the Hospital’s premises is
            expected to follow the Hospital’s environmental policies and report
            any environmental, health or safety concerns to management to take
            appropriate actions.
          </li>
          <li className="list-decimal mt-1">
            We will minimize the environmental impact of the hospital’s
            operations on the neighboring communities due to such potential
            hazards as infectious waste water management, etc.
          </li>
          <li className="list-decimal mt-1">
            We will respect the use of natural resources by participating in
            energy conservation, initiative and supporting the recycling of
            materials.
          </li>
          <li className="list-decimal mt-1">
            To ensure that the Hospital complies with our environmental rules,
            we will perform thorough audits and evaluations. We also want to
            keep improving the environment.
          </li>
        </ol>
        <div className="ml-4 mt-8">
          <img
            src={environmentimg}
            alt="Bumrungrad International Hospital"
            srcset=""
          />
        </div>
      </div>
    </section>
  );
};

export default VissionMisson;
