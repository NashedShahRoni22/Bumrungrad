import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { DateRangeOutlined, } from "@mui/icons-material";
import { FaRegClock } from "react-icons/fa";

const OneBlog = () => {
  const { slug } = useParams();
  const [loader, setLoader] = useState(true);
  const [oneBlog, setBlog] = useState({});
  // Get the created_at value from the oneBlog object
  const [createdAtValue, setCreatedAtValue] = useState("");

  // Extract the date and time components using string manipulation
  const date = createdAtValue.slice(0, 10); // Extracts the date part (YYYY-MM-DD)
  const time = createdAtValue.slice(11, 19); // Extracts the time part (HH:MM:SS)

  console.log("Date:", date); // Output the date
  console.log("Time:", time); // Output the time

  // get data
  useEffect(() => {
    fetch(`https://api.bumrungraddiscover.com/api/get/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data?.data);
        setCreatedAtValue(data?.data?.created_at);
        setLoader(false);
      });
  }, [slug]);
  return (
    <div className="p-5 my-5 md:container md:mx-auto">
      {loader ? (
        <Loader />
      ) : (
        <div className="lg:flex">
          <div className="lg:w-1/5">

          </div>
          <div className="lg:w-4/5 flex flex-col gap-2.5 md:gap-5">
            <LazyLoadImage
              src={oneBlog?.blogImage}
              alt="Bumrungrad International Hospital"
              effect="blur"
              className="w-full lg:h-[50vh]"
            />
            <div className="flex justify-between">
              <p className="flex gap-2 items-center">
                <FaRegClock/>
                {" "}
                {time}{" "}
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <DateRangeOutlined />
                {date}{" "}
              </p>
            </div>
            <h5 className="font-semibold text-blue text-xl">
              {oneBlog?.blogTitle}
            </h5>
            <p>{oneBlog?.blogSlogan}</p>
            <div
              dangerouslySetInnerHTML={{ __html: oneBlog?.blogDescription }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OneBlog;
