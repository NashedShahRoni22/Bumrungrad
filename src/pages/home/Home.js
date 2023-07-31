import React from "react";
import Services from "./Services";
import LandingBanner from "./LandingBanner";

export default function Home() {
  return (
    <section>
      <div>
        <LandingBanner/>
        <Services/>
      </div>
    </section>
  );
}
