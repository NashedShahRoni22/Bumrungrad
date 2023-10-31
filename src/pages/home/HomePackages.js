import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Loader from "../../shared/Loader/Loader";
import { Link } from "react-router-dom";

export default function HomePackages() {
  const [loader, setLoader] = useState(false);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setLoader(true);
    fetch("https://api.bumrungraddiscover.com/api/get/package")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setPackages(data?.data);
          setLoader(false);
        } else {
          console.log(data);
          setLoader(false);
        }
      });
  }, []);
  return (
    <section className="p-5 md:p-10 my-5 md:container md:mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
          our packages
        </h1>
        <Link
          to={"/packages"}
          className="rounded px-2 md:px-4 py-1 md:py-2 border border-blue text-blue hover:bg-blue hover:text-white duration-300 ease-linear"
        >
          View All
        </Link>
      </div>
      {loader ? (
        <Loader />
      ) : (
        <div className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {packages.slice(0, 4).map((p) => (
            <div className="flex flex-col justify-between gap-2 shadow hover:shadow-xl duration-300 ease-linear">
              <img src={p?.cover_photo} alt="" />
              <div className="p-2.5">
                <p className="font-semibold text-blue md:text-xl">{p?.title}</p>
                <p>{p?.description.slice(0, 160)}</p>
              </div>
              <button className="group bg-blue text-white p-2.5 w-full flex justify-center gap-2 rounded-bl rounded-br">
                <RemoveRedEyeIcon />
                <span className="capitalize">View Packages</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
