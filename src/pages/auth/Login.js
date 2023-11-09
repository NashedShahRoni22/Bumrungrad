import { Divider, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState();
  //const [error, SetError] = useState('')
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handaleLogin = () => {
    setLoader(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    fetch("https://api.bumrungraddiscover.com/api/login", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setLoader(false);
          console.log(data);
          localStorage.setItem("Access_Token", data?.msg?.token);
          localStorage.setItem(
            "User_Details",
            JSON.stringify(data?.msg?.user_details)
          );
          navigate("/");
        } else {
          console.log(data);
          alert("Credential didn't match with our record!");
          setLoader(false);
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <section className="p-5 md:p-10 lg:w-1/2 my-5 md:my-10 mx-5 md:container md:mx-auto shadow">
      <h5 className="text-xl md:text-3xl font-semibold text-blue mb-4">
        Login
      </h5>
      <Divider />
      <div className="mt-4">
        <p className="mb-2.5">Enter Email</p>
        <TextField
          fullWidth
          placeholder="Required"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div className="mt-5">
        <p className="mb-2.5">Enter Password</p>
        <TextField
          fullWidth
          placeholder="Required"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <div className="flex justify-center mt-4">
        <button
          className={`flex justify-center items-center gap-2 min-w-[200px] mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
            email === "" || password === ""
              ? "bg-white text-blue"
              : "text-white"
          }`}
          disabled={email === "" || password === ""}
          onClick={handaleLogin}
        >
          Login{" "}
          {loader && (
            <div className="flex gap-1">
              <div className="h-3 w-3 shadow bg-white rounded-full"></div>
              <div className="h-3 w-3 shadow bg-white rounded-full animate-bounce"></div>
            </div>
          )}
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
