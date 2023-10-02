import React from "react";
// import line from "../../assets/line.png";
import whatsapp from "../../assets/whatsapp.png";
// import viber from "../../assets/viber.png";
import telegram from "../../assets/telegram.png";

import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function SideBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid white",
    borderRadius: "8px",
    boxShadow: 24,
    p: 2,
  };
  return (
    <div>
      {/* <a
        href={`viber://add?number=+8801847284860`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={viber} alt="line_logo" className="h-[40px]" />
      </a> */}
      <a
        href={`https://t.me/${encodeURIComponent("+8801847284860")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={telegram} alt="line_logo" className="h-[40px] mt-1" />
      </a>
      {/* <a href="">
        <img src={line} alt="line_logo" className="h-[40px] mt-1" />
      </a> */}
      <button
        // href="http://wa.me/+8801324418100"
        // target="_blank"
        // rel="noopener noreferrer"
        onClick={handleOpen}
      >
        <img src={whatsapp} alt="line_logo" className="h-[40px] mt-1" />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <a
            href="http://wa.me/+8801324418100"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl flex gap-4 my-2 items-center p-2 hover:shadow-lg duration-300 ease-linear"
          >
            <img src={whatsapp} alt="line_logo" className="h-[40px]" />
            <span className="text-blue font-semibold">Appointment Booking</span>
          </a>
          <a
            href="http://wa.me/+8801847284860"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl flex gap-4 my-2 items-center p-2 hover:shadow-lg duration-300 ease-linear"
          >
            <img src={whatsapp} alt="line_logo" className="h-[40px]" />
            <span className="text-blue font-semibold">Medical Procedure Booking</span>
          </a>
          <a
            href="http://wa.me/+8801847284863"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl flex gap-4 my-2 items-center p-2 hover:shadow-lg duration-300 ease-linear"
          >
            <img src={whatsapp} alt="line_logo" className="h-[40px]" />
            <span className="text-blue font-semibold">Medical Package Booking</span>
          </a>
        </Box>
      </Modal>
    </div>
  );
}
