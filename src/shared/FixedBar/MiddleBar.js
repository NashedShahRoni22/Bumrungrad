import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function MiddleBar() {
  return (
    <section className="flex justify-center mx-5">
      <div className="flex gap-1 justify-center bg-blue rounded-xl">
        <div className="rounded-l-xl flex flex-col md:flex-row gap-2.5 px-3 py-2 md:px-6 md:py-4 hover:bg-white hover:text-blue items-center duration-300 ease-linear cursor-pointer text-white">
          <SearchIcon sx={{ fontSize: "24px" }} />
          <p className="text-[16px]">Find Doctor</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2.5 px-3 py-2 md:px-6 md:py-4 hover:bg-white hover:text-blue items-center duration-300 ease-linear cursor-pointer text-white">
          <EventAvailableIcon sx={{ fontSize: "24px" }} />
          <p className="text-[16px]">Appointment</p>
        </div>
        <div className="rounded-r-xl flex flex-col md:flex-row gap-2.5 px-3 py-2 md:px-6 md:py-4 hover:bg-white hover:text-blue items-center duration-300 ease-linear cursor-pointer text-white">
          <HelpOutlineIcon sx={{ fontSize: "24px" }} />
          <p className="text-[16px]">Send Query</p>
        </div>
      </div>
    </section>
  );
}
