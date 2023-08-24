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
const corporates = ["Management Team", "Gallery", "Send Inquiry", "Direction"];
const blognews = ["Bumrungrad Health Blog", "News"];

export default function BottomBar() {
  return (
    <footer className="bg-cream pt-10 pb-28 md:pb-20 text-blue px-10">
      <div className="md:container md:mx-auto mx-5 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="font-semibold">Services</p>
          <ul className="text-[16px] flex flex-col gap-2 mt-2 ml-5 list-disc">
            {serives.map((s, i) => (
              <li key={i}>
                <Link>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Site Information</p>
          <ul className="text-[16px] flex flex-col gap-2 mt-2 ml-5 list-disc">
            {siteInfos.map((s, i) => (
              <li key={i}>
                <Link>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Blog & News</p>
          <ul className="text-[16px] flex flex-col gap-2 mt-2 ml-5 list-disc">
            {blognews.map((s, i) => (
              <li key={i}>
                <Link>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Corporates</p>
          <ul className="text-[16px] flex flex-col gap-2 mt-2 ml-5 list-disc">
            {corporates.map((s, i) => (
              <li key={i}>
                <Link>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:container md:mx-auto mt-10 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <p className="text-center">
          <CopyrightIcon />
          2023 Bumrungrad International Hospital Referral Office
        </p>
        <div className="flex gap-4 items-center">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
