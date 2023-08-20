import React from "react";
import Services from "./Services";
import LandingBanner from "./LandingBanner";
import ContactUs from "./ContactUs";

export default function Home() {
  return (
    <section>
        <LandingBanner/>
        <Services/>
        <ContactUs/>
    </section>
  );
}
