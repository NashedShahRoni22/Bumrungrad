import React from "react";
import Services from "./Services";
import LandingBanner from "./LandingBanner";
import ClinicCenters from "./ClinicCenters";
import WhyUs from "./WhyUs";
import MiddleBar from "../../shared/FixedBar/MiddleBar";
import News from "./News";
import Blogs from "./Blogs";

import HomeContact from "./HomeContact";

export default function Home() {
  return (
    <section>
      <LandingBanner />
      <Services />
      <ClinicCenters />
      <WhyUs />
      <News />
      <Blogs />
      <HomeContact/>
      <div className="fixed bottom-2 min-w-full z-50">
        <MiddleBar />
      </div>
    </section>
  );
}
