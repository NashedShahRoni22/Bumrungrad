import React from "react";
import { Link } from "react-router-dom";
import CopyrightIcon from "@mui/icons-material/Copyright";

const serives = [
  "Book Appointment",
  "Send Inquiry",
  "Find a Doctor",
  "Conditions and Treatments",
  "Clinics and Centers",
];
const siteInfos = [
  "About Bumrungrad",
  "Bumrungrad application",
  "Food & Beverage",
  "Shopping",
];
const corporates = [
  "Management Team",
  "Gallery",
  "Send Inquiry",
  "Direction",
];
const blognews = ["Bumrungrad Health Blog", "News"];

const GoogleMapsEmbed = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.05224193445!2d90.3824876761062!3d23.745516388962468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b91b29851709%3A0xc3d50a2ecf8fad9a!2sBumrungrad%20Hospital%20Dhaka%20Office!5e0!3m2!1sen!2sbd!4v1692206329747!5m2!1sen!2sbd"
      width="400"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default function BottomBar() {
  return (
    <footer className="bg-cream py-20 text-blue">
      <div className="md:container md:mx-auto grid md:grid-cols-4 gap-6">
        <div>
          <p className="font-semibold">Services</p>
          <ul className="text-[16px] flex flex-col gap-2 mt-2 ml-5 list-disc">
            {serives.map((s, i) => (
              <li>
                <Link>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Site Information</p>
          <ul className="text-[16px] flex flex-col gap-2 mt-2 ml-5 list-disc">
            {siteInfos.map((s, i) => (
              <li>
                <Link>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Blog & News</p>
          <ul className="text-[16px] flex flex-col gap-2 mt-2 ml-5 list-disc">
            {blognews.map((s, i) => (
              <li>
                <Link>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Corporates</p>
          <ul className="text-[16px] flex flex-col gap-2 mt-2 ml-5 list-disc">
            {corporates.map((s, i) => (
              <li>
                <Link>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <div className="text-center mt-10">
        <p>
          <CopyrightIcon />2023 Bumrungrad Hospital Dhaka Office
        </p>
        <p>
          Bumrungrad Hospital Dhaka Office. <br />
          Rupayan Prime, House-02, Road-07, Lift-09, Green Rd, Dhaka 1205.
        </p>
      </div>
    </footer>
  );
}
