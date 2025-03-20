import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChildPackage = () => {
  const [loader, setLoader] = useState();
  const { slug } = useParams();
  const [childPackage, setChildPackage] = useState([]);
  console.log(childPackage);

  useEffect(() => {
    setLoader(true);
    fetch(`http://api.bumrungraddiscover.com/api/get/sub/packages/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setChildPackage(data?.data);
          setLoader(false);
        }
        setLoader(false);
      });
  }, [slug]);
  return (
    <section className="mx-5 md:container md:mx-auto py-10">
      {loader ? (
        <Loader />
      ) : (
        <div>
          {childPackage?.length > 0 ? (
            <>
              <h2 className="md:ml-8 text-xl font-semibold md:text-2xl lg:text-3xl capitalize text-blue">
                our packages
              </h2>
              <div className="md:ml-8 my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {" "}
                {childPackage.map((cp, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-between gap-5 shadow"
                  >
                    <LazyLoadImage
                      src={cp?.cover_photo}
                      alt="Bumrungrad International Hospital"
                      effect="blur"
                    />
                    <div className="p-2.5">
                      <p className="font-semibold text-blue md:text-xl">
                        {cp?.title}
                      </p>

                      <p className="mt-2.5">
                        <span className="font-semibold">Location:</span> {cp?.location}.
                      </p>
                      {/* <div
                        id="blog_desc"
                        className="text-sm lg:text-base mt-2.5"
                        dangerouslySetInnerHTML={{
                          __html: cp?.content?.slice(0, 300) + "...",
                        }}
                      /> */}
                    </div>
                    <Link
                      to={`/sub-package-details/${cp?.slug}`}
                      className="group bg-blue text-white p-2.5 w-full flex justify-center gap-2 rounded-bl rounded-br"
                      target="_blank"
                    >
                      <RemoveRedEyeIcon />
                      <span className="capitalize">View Package</span>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="min-h-[80vh] flex justify-center items-center text-3xl text-red font-semibold">
              No Data Found
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default ChildPackage;
