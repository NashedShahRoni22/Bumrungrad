import {
  Divider,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { countries } from "../appointment/Countries";
import { MuiTelInput } from "mui-tel-input";
import { Link } from "react-router-dom";

export default function Register() {
  //yes or no
  const [yes, setYes] = useState(true);

  //user information
  const [firstname, setfirstname] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [pataientEmail, setPataientEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [citizenship, setCitizenship] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handlePhone = (newPhone) => {
    setPhone(newPhone);
  };
  return (
    <div className="md:p-10 my-5 md:my-10 md:container mx-5 md:mx-auto">
      <section className="p-5 shadow">
        {/* first-card */}
        <section className="">
          <h5 className="mb-4 text-xl md:text-3xl text-semibold my-5 font-semibold text-blue">
            Welcome
          </h5>
          <Divider/>
          <div className="grid md:grid-cols-2 gap-4 mt-5">
            <div>
              <p className="mb-2.5">Enter First Name</p>
              <TextField
                onChange={(e) => setfirstname(e.target.value)}
                fullWidth
                placeholder="Required"
              />
            </div>
            <div>
              <div>
                <p className="mb-2.5">Enter Last Name</p>
                <TextField
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                  placeholder="Required"
                />
              </div>
            </div>

            <FormControl fullWidth>
              <p className="mb-2.5">Select Citizenship(Required)</p>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.value)}
              >
                {countries.map((c, i) => (
                  <MenuItem key={i} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <p className="mb-2.5">Select Gender(Required)</p>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <div>
              <p className="mb-2.5">Enter Email</p>
              <TextField
                fullWidth
                placeholder="Required"
                onChange={(e) => setPataientEmail(e.target.value)}
              />
            </div>
            <div>
              <p className="mb-2.5">Enter Phone Number(Required)</p>
              <MuiTelInput
                defaultCountry="TH"
                value={phone}
                onChange={handlePhone}
                fullWidth
              />
            </div>
            <div>
              <p className="mb-2.5">Enter Date of Birth(Required)</p>
              <TextField
                fullWidth
                type="date"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* second card  */}
        <section>
          <h5 className="mt-5">Are you in Thailand?</h5>
          <div className="flex gap-2 mt-2.5 mb-5">
            <button
              className={`px-5 py-2 rounded-xl ${
                yes === true && "bg-blue text-white"
              }`}
              onClick={() => setYes(true)}
            >
              Yes
            </button>
            <button
              className={`px-5 py-2 rounded-xl ${
                yes === false && "bg-blue text-white"
              }`}
              onClick={() => {
                setYes(false);
              }}
            >
              No
            </button>
          </div>
          {yes === false && (
            <FormControl fullWidth>
              <p className="mb-2.5">Select Country(Required)</p>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                className="mb-4"
                onChange={(e) => setCountry(e.target.value)}
              >
                {countries.map((c, i) => (
                  <MenuItem key={i} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </section>

        {/* password card  */}
        <section>
          <div>
            <p className="mb-2.5">Enter Password</p>
            <TextField
              fullWidth
              placeholder="Required"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <p className="mb-2.5">Confirm Password</p>
            <TextField
              fullWidth
              placeholder="Required"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </section>
        <div className="flex justify-center">
          <button
            className={`mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
              firstname === "" ||
              lastName === "" ||
              citizenship === "" ||
              gender === "" ||
              pataientEmail === "" ||
              phone === "" ||
              dob === ""
                ? "bg-white text-blue"
                : "text-white"
            }`}
            disabled={
              firstname === "" ||
              lastName === "" ||
              citizenship === "" ||
              gender === "" ||
              pataientEmail === "" ||
              phone === "" ||
              dob === ""
            }
          >
            Register
          </button>
        </div>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="underline text-blue">
            Please Login
          </Link>{" "}
        </p>
      </section>
    </div>
  );
}
