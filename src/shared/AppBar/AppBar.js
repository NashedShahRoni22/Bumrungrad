import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import logo from "../../assets/bumrungrad_logo.jpg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function AppBar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    status: false,
    index: "",
  });
  const handleDropdown = (id) => {
    setDropdownOpen({
      status: !dropdownOpen.status,
      index: id,
    });
  };
  return (
    <nav>
      <section className="mx-10 py-5 lg:container lg:mx-auto flex items-center justify-between">
        <div>
          <img src={logo} alt="nav_logo" className="w-[200px]" />
        </div>
        {/* Desktop View  */}
        <div className="hidden lg:block">
          <ul className="flex justify-center gap-8 lg:text-lg text-blue font-semibold">
            {MenuItems.map((mi, i) => (
              <li key={i} className="group relative">
                <Link>{mi.header}</Link>
                {mi.childs && (
                  <ul className="ml-5 p-5 bg-white shadow-md hidden group-hover:block absolute top-7 min-w-[400px]">
                    {mi.childs?.map((mc,i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-0.5 bg-blue w-5"></div>
                        <Link className="hover:ml-5 my-2.5 duration-300 ease-linear">
                          {mc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile View  */}
        <div className="min-w-full absolute top-20 left-0 lg:hidden">
          {open && (
            <ul className="min-h-screen bg-white p-10 flex flex-col gap-4 md:gap-8 text-3xl md:text-5xl text-blue font-semibold border-t-2 md:border-t-4 border-blue">
              {MenuItems.map((mi, i) => (
                <li key={i} className="relative">
                  <Link
                    className="flex justify-between items-center"
                    onClick={() => handleDropdown(i)}
                  >
                    {mi.header}
                    {mi.childs && (
                      <>
                        {dropdownOpen.status && dropdownOpen.index === i ? (
                          <ExpandLessIcon sx={{ fontSize: "48px" }} />
                        ) : (
                          <ExpandMoreIcon sx={{ fontSize: "48px" }} />
                        )}
                      </>
                    )}
                  </Link>

                  {mi.childs &&
                    dropdownOpen.index === i &&
                    dropdownOpen.status && (
                      <ul className="p-3 md:p-6 ">
                        {mi.childs?.map((mc,i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1 bg-blue w-5"></div>
                            <Link className="hover:ml-5 my-2.5 duration-300 ease-linear">
                              {mc.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-4">
          <AccountCircleIcon
            sx={{ fontSize: "28px" }}
            className="cursor-pointer text-blue"
          />
          <WhatsAppIcon
            sx={{ fontSize: "28px" }}
            className="cursor-pointer text-blue"
          />
          {/* Navbar Button  */}
          <button className="lg:hidden z-50" onClick={() => setOpen(!open)}>
            {open ? (
              <CloseIcon
                sx={{ fontSize: "28px" }}
                className="cursor-pointer text-blue"
              />
            ) : (
              <MenuIcon
                sx={{ fontSize: "28px" }}
                className="cursor-pointer text-blue"
              />
            )}
          </button>
        </div>
      </section>
    </nav>
  );
}
