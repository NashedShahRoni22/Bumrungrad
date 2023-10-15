import React from "react";
import img from "../../assets/contact.svg";
import { TextField } from "@mui/material";

export default function HomeContact() {
  return (
    <section className="md:p-10 my-5 md:container md:mx-auto flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-between lg:items-center gap-16">
      <div className="lg:w-1/2">
        <img src={img} alt="" />
      </div>
      <form className="w-full flex flex-col gap-4 shadow-md shadow-blue p-10 rounded lg:w-1/2">
        <h1 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
          Say hello!
        </h1>
        <TextField label="Enter Name" variant="outlined" fullWidth />
        <TextField label="Enter Email" variant="outlined" fullWidth />
        <TextField
          label="Enter Message"
          variant="outlined"
          fullWidth
          multiline
          rows={5}
        />
        <button className="hover:bg-blue px-4 py-2 text-blue hover:text-white border border-blue font-semibold rounded duration-300 ease-linear">
          Submit
        </button>
      </form>
    </section>
  );
}
