import React from "react";

export default function User() {
  const userdetails = JSON.parse(localStorage.getItem("User_Details"));
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
      <div className="mt-5 shadow p-5 rounded">
        <h5 className="font-semibold text-lg text-blue">My Appointment</h5>
      </div>
    </section>
  );
}
