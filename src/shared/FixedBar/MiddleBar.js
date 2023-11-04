import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import DialogTitle from "@mui/material/DialogTitle";

export default function MiddleBar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="flex justify-center mx-5">
      <div className="flex gap-1 justify-center bg-blue backdrop-blur-xl rounded-xl">
        <Link
          to="/find"
          className="rounded-l-xl flex flex-col md:flex-row  gap-2.5 px-3 py-2 md:px-6 md:py-4 hover:bg-green items-center duration-300 ease-linear cursor-pointer text-white"
        >
          <SearchIcon sx={{ fontSize: "24px" }} />
          <p className="text-[16px] text-center flex gap-1">
            Find <span className="hidden md:block">Doctor</span>{" "}
          </p>
        </Link>
        <button
          onClick={handleClickOpen}
          className="flex flex-col md:flex-row  gap-2.5 px-3 py-2 md:px-6 md:py-4 hover:bg-green items-center duration-300 ease-linear cursor-pointer text-white"
        >
          <EventAvailableIcon sx={{ fontSize: "24px" }} />
          <p className="text-[16px] text-center flex gap-1">
            {" "}
            <span className="hidden md:block">Book</span> Appointment
          </p>
        </button>
        <Link
          to="/send_query"
          className="rounded-r-xl flex flex-col md:flex-row  gap-2.5 px-3 py-2 md:px-6 md:py-4 hover:bg-green items-center duration-300 ease-linear cursor-pointer text-white"
        >
          <HelpOutlineIcon sx={{ fontSize: "24px" }} />

          <p className="text-[16px] text-center flex gap-1">
            {" "}
            <span className="hidden md:block">Send</span> Query
          </p>
        </Link>
      </div>

      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" className="!font-semibold">
            {"Choose Type"}
          </DialogTitle>
          <DialogContent className="flex flex-col gap-2">
            <Link
              className="px-4 py-2 rounded shadow hover:shadow-xl duration-300 ease-linear text-white bg-blue"
              to="/check_up"
            >
              {" "}
              <HealthAndSafetyIcon /> Health Screening
            </Link>
            <Link
              className="px-4 py-2 rounded shadow hover:shadow-xl duration-300 ease-linear text-white bg-blue"
              to="/appointment"
            >
              {" "}
              <VaccinesIcon /> Doctor Appointment
            </Link>
          </DialogContent>
          <DialogActions>
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={handleClose}
                autoFocus
              >
                Close
              </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </section>
  );
}
