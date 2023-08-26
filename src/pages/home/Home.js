import React from "react";
import Services from "./Services";
import LandingBanner from "./LandingBanner";
import ContactUs from "./ContactUs";
import ClinicCenters from "./ClinicCenters";
import WhyUs from "./WhyUs";

export default function Home() {
  return (
    <section>
        <LandingBanner/>
        <Services/>
        <ClinicCenters/>
        <WhyUs/>
        <ContactUs/>
    </section>
  );
}
