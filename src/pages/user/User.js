import React, { useState } from "react";

export default function User() {
  const userdetails = JSON.parse(localStorage.getItem("User_Details"));
  const accessToken = localStorage.getItem("Access_Token");
  const [appointments, setAppointments] = useState([]);
  console.log(appointments);

  // Set up the headers with the access token
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json", // You can adjust this content type based on your API requirements
  };

  // Make the GET request
  fetch(
    `https://api.bumrungraddiscover.com/api/personal/appointment/${userdetails?.id}`,
    {
      method: "GET",
      headers: headers,
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json(); // Parse the response body as JSON
      } else {
        throw new Error("Failed to fetch data");
      }
    })
    .then((data) => {
      // Handle the data here, e.g., set it in your state
      // console.log("Fetched data:", data);
      setAppointments(data?.data);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error:", error);
    });
  return (
    <section className="mx-5 md:container md:mx-auto py-10">
      <div className="shadow p-5 rounded relative">
        <h5 className="font-semibold text-lg text-blue">My Profile</h5>
        <hr className="my-2.5" />
        <p className="flex gap-2">
          {" "}
          <span className="font-semibold text-blue">Name:</span>
          <span className="capitalize">
            {userdetails?.firstName} {userdetails?.lastName}{" "}
          </span>
        </p>
        <p className="flex gap-2">
          {" "}
          <span className="font-semibold text-blue">Citizenship:</span>
          <span className="capitalize">{userdetails?.citizenship} </span>
        </p>
        <p className="flex gap-2">
          {" "}
          <span className="font-semibold text-blue">Country:</span>
          <span className="capitalize">{userdetails?.country} </span>
        </p>
        <p className="flex gap-2">
          {" "}
          <span className="font-semibold text-blue">DOB:</span>
          {userdetails?.dob}{" "}
        </p>
        <p className="flex gap-2">
          {" "}
          <span className="font-semibold text-blue">Email:</span>
          {userdetails?.email}{" "}
        </p>
        <p className="flex gap-2">
          {" "}
          <span className="font-semibold text-blue">Phone:</span>
          {userdetails?.phone}{" "}
        </p>
      </div>
      <div className="mt-5">
        <h5 className="font-semibold text-lg text-blue">
          Total Appointment Taken {appointments?.length}
        </h5>
        <div>
          {appointments?.map((a,i) => (
            <div key={i}>
              <div className="shadow p-2.5 mt-2">
                <p>{i+1}</p>
                <p>{a?.doctor && a?.doctor}</p>
                <p>{a?.specialty && a?.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
