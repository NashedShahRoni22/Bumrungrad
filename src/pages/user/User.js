import React, { useEffect, useState } from "react";
import Loader from "../../shared/Loader/Loader";

export default function User() {
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null);
  const userdetails = JSON.parse(localStorage.getItem("User_Details"));
  const accessToken = localStorage.getItem("Access_Token");
  const [appointments, setAppointments] = useState([]);
  console.log(appointments);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const headers = {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        };

        const response = await fetch(
          `https://api.bumrungraddiscover.com/api/personal/appointment/${userdetails?.id}`,
          {
            method: "GET",
            headers: headers,
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAppointments(data?.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [accessToken, userdetails?.id]); // The empty dependency array ensures this effect runs once

  if (loading) {
    // You can render a loading indicator here
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    // You can handle and render the error here
    return <div>Error: {error.message}</div>;
  }
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
          {appointments?.map((a, i) => (
            <div key={i}>
              <div className="shadow p-2.5 mt-2">
                <div className="flex justify-between">
                  <div>
                    {a?.doctor && (
                      <p className="font-semibold text-blue">{a?.doctor} </p>
                    )}
                    {a?.specialty && <p> {a?.specialty} </p>}
                  </div>
                  <div>
                    {a?.status == 0 ? (
                      <p className="px-2 py-1 bg-blue text-white rounded">
                        Pending
                      </p>
                    ) : (
                      <p className="px-2 py-1 bg-red text-white rounded">
                        Processing
                      </p>
                    )}
                  </div>
                </div>
                <hr className="my-2.5" />
                <div className="grid md:grid-cols-2">
                  <div>
                    <p>{a?.selectedDate && a?.selectedDate}</p>
                    <p>{a?.shift && a?.shift}</p>
                    {a?.firstSiftTime && <p> {a?.firstSiftTime}</p>}
                  </div>
                  <div>
                    <p>{a?.selectedDate2 && a?.selectedDate2}</p>
                    <p>{a?.shift2 && a?.shift2}</p>
                    {a?.SecondSiftTime && <p> {a?.SecondSiftTime}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
