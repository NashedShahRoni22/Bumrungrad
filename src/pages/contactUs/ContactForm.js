import React from "react";
import contactAnim from "../../assets/anim/contact.json";
import Lottie from "lottie-react";
import { Button, TextField } from "@mui/material";

export default function ContactForm() {
  const style = {
    height: 400,
  };
  return (
    <div>
      <h1 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
        Contact us
      </h1>
      <div className="my-10 md:flex gap-8 items-center">
        <form className="flex flex-col gap-4 md:w-1/2 shadow p-5 rounded">
          <TextField label="Enter Name" variant="outlined" />
          <TextField label="Enter Email" variant="outlined" />
          <TextField
            label="Enter Message"
            variant="outlined"
            multiline
            rows={5}
          />
          <Button variant="contained" className="bg-blue">
            Submit
          </Button>
        </form>
        <div className=" md:w-1/2">
          <Lottie animationData={contactAnim} loop={true} style={style} />
        </div>
      </div>
    </div>
  );
}
