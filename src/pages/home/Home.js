import React from "react";
import Services from "./Services";
import LandingBanner from "./LandingBanner";
import ContactUs from "./ContactUs";
import ClinicCenters from "./ClinicCenters";
import WhyUs from "./WhyUs";
import MiddleBar from "../../shared/FixedBar/MiddleBar";

export default function Home() {
  return (
    <section>
      <LandingBanner />
      <Services />
      <ClinicCenters />
      <WhyUs />
      <ContactUs />
      <div className="fixed bottom-2 min-w-full z-50">
        <MiddleBar />
      </div>
    </section>
  );
}
