import { Divider, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <section className="p-5 md:p-10 lg:w-1/2 my-5 md:my-10 mx-5 md:container md:mx-auto shadow">
      <h5 className="text-xl md:text-3xl font-semibold text-blue mb-4">Login</h5>
      <Divider/>
      <div className="mt-4">
        <p className="mb-2.5">Enter Email</p>
        <TextField
          fullWidth
          placeholder="Required"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-5">
        <p className="mb-2.5">Enter Password</p>
        <TextField
          fullWidth
          placeholder="Required"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          className={`mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
            email === "" || password === ""
              ? "bg-white text-blue"
              : "text-white"
          }`}
          disabled={email === "" || password === ""}
        >
          Login
        </button>
      </div>
      <p className="mt-4 text-center">
        New here?{" "}
        <Link to={"/register"} className="underline text-blue">
          Please create an account
        </Link>{" "}
      </p>
    </section>
  );
}
