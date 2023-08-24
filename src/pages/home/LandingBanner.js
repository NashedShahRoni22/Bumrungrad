import React from "react";
import BannerImage from "../../assets/banner_img.png";
import { Typewriter } from "react-simple-typewriter";

export default function LandingBanner() {
  return (
    <section className="bg-cream relative">
      <div className="flex flex-col-reverse md:flex-row py-20 px-10 justify-center items-center md:container md:mx-auto relative">
        <div className="md:w-1/2">
          <h1 className="text-4xl text-center md:text-left md:text-6xl lg:text-8xl font-extrabold text-blue">
            Asia's Favourite Medical <br />
            <span>
              <Typewriter
                words={["Destination", "Hub", "Hotspot", "Retreat"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={2000}
              />
            </span>
          </h1>
        </div>
        <div className="md:w-1/2">
          <img src={BannerImage} alt="BannerImage" />
        </div>
      </div>
    </section>
  );
}
