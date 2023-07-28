import React from "react";
import line from "../../assets/line.png";
import whatsapp from "../../assets/whatsapp.png";

export default function SideBar() {
  return (
    <div>
      <img src={line} alt="line_logo" className="h-[50px]" />
      <img src={whatsapp} alt="line_logo" className="h-[50px] mt-1" />
    </div>
  );
}
