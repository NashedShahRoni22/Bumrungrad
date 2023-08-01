import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import logo from "../../assets/nav_logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Divider } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

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
    <nav className="bg-cream">
      <section className="mx-5 py-5 lg:container lg:mx-auto flex items-center justify-between">
        <div>
          <img src={logo} alt="nav_logo" className="w-[200px]" />
        </div>
        {/* Desktop View  */}
        <div className="hidden lg:block">
          <ul className="flex justify-center gap-8 text-[16px] text-blue">
            {MenuItems.map((mi, i) => (
              <li key={i} className="group relative">
                <Link className="font-semibold">{mi.header}</Link>
                {mi.childs && (
                  <ul className="ml-2 p-2 rounded-xl bg-white shadow-xl hidden group-hover:block absolute top-6 min-w-[300px] z-30">
                    {mi.childs?.map((mc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="h-2 bg-blue w-2 rounded-full"></div>
                        <Link className="hover:ml-3 my-1 duration-300 ease-linear">
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
        <div className="min-w-full absolute top-20 left-0 lg:hidden z-30">
          {open && (
            <ul className="min-h-[80vh] bg-white p-10 flex flex-col gap-4 md:gap-8 text-[16px] text-blue border-t-2 md:border-t-4 border-blue">
              {MenuItems.map((mi, i) => (
                <>
                  <li key={i} className="relative">
                    <Link
                      className="flex font-semibold justify-between items-center rounded-xl"
                      onClick={() => handleDropdown(i)}
                    >
                      {mi.header}
                      {mi.childs && (
                        <>
                          {dropdownOpen.status && dropdownOpen.index === i ? (
                            <ExpandLessIcon sx={{ fontSize: "24px" }} />
                          ) : (
                            <ExpandMoreIcon sx={{ fontSize: "24px" }} />
                          )}
                        </>
                      )}
                    </Link>

                    {mi.childs &&
                      dropdownOpen.index === i &&
                      dropdownOpen.status && (
                        <ul className="p-1 md:p-2">
                          {mi.childs?.map((mc, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-blue"></div>
                              <Link className="hover:ml-3 my-1 duration-300 ease-linear">
                                {mc.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                  <Divider />
                </>
              ))}
            </ul>
          )}
        </div>
        <div className="flex gap-4">
          <div className="relative group">
            <Link className="md:px-4 md:py-2 md:bg-blue flex items-center gap-2 duration-300 ease-linear rounded-xl">
              <PersonIcon
                sx={{ fontSize: "28px" }}
                className="text-blue md:text-white"
              />{" "}
              <span className="hidden md:block text-white">Account</span>
            </Link>
            <div className="hidden group-hover:block duration-300 ease-linear bg-white absolute z-50 min-w-[120px] md:min-w-[150px] rounded-xl shadow-xl">
              <div className="flex flex-col p-2 rounded-xl gap-2">
                <Link className="hover:text-blue font-semibold p-1 rounded-xl duration-300 ease-linear">
                  <LoginIcon /> <span>Sign In</span>
                </Link>
                <Divider />
                <Link className="hover:text-blue font-semibold p-1 rounded-xl duration-300 ease-linear">
                  <LogoutIcon /> <span>Sign Out</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <WhatsAppIcon
              sx={{ fontSize: "28px" }}
              className="cursor-pointer text-blue"
            />
            {/* Navbar Button  */}
            <button className="lg:hidden z-50" onClick={() => setOpen(!open)}>
              {open ? (
                <CloseIcon
                  sx={{ fontSize: "28px" }}
                  className="cursor-pointer text-blue hover:rotate-45 duration-300 ease-linear"
                />
              ) : (
                <MenuIcon
                  sx={{ fontSize: "28px" }}
                  className="cursor-pointer text-blue hover:rotate-90 duration-300 ease-linear"
                />
              )}
            </button>
          </div>
        </div>
      </section>
      <Divider />
    </nav>
  );
}
