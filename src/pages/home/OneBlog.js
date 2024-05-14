import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../shared/Loader/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

const OneBlog = () => {
  const { slug } = useParams();
  const [loader, setLoader] = useState(true);
  const [oneBlog, setBlog] = useState({});
  const [view, setView] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // get data
  useEffect(() => {
    setLoader(true);
    fetch(`https://api.bumrungraddiscover.com/api/get/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data?.data);
        setLoader(false);
      });
  }, [slug]);

  const [headings, setHeadings] = useState([]);
  // Generate table of contents
  useEffect(() => {
    const blogDescElement = document.getElementById("blog_desc");
    if (blogDescElement) {
      const headingsData = [];
      const headingElements = blogDescElement.querySelectorAll(
        "h1, h2, h3, h4, h5, h6"
      );
      headingElements.forEach((element) => {
        const name = element.innerText;
        const target = name.toLowerCase().replace(/\s+/g, "_");
        element.id = target; // Set the id attribute of the element
        headingsData.push({ name, target });
      });
      setHeadings(headingsData);
    }
  }, [loader]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-5 my-5 md:container md:mx-auto relative">
      {loader ? (
        <Loader />
      ) : (
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          <div className="lg:w-[400px] rounded shadow lg:h-fit lg:bg-white">
            <div
              className="flex justify-between items-center p-2.5"
              onClick={() => setView(!view)}
            >
              <p className="font-semibold lg:text-xl">Content Finder</p>
              {view ? (
                <FaArrowUp className="text-blue h-8 lg:hidden" />
              ) : (
                <FaArrowDown className="text-blue h-8 lg:hidden" />
              )}
            </div>
            {view && (
              <div className="lg:hidden m-2.5">
                {headings.map((h) => (
                  <a
                    key={h.target}
                    href={`#${h.target}`}
                    className="flex justify-between items-center lg:border-b lg:border-blue p-2.5"
                  >
                    {h.name} <FaArrowRight className="text-blue" />
                  </a>
                ))}
              </div>
            )}

            <div className="hidden lg:block">
              {headings.map((h) => (
                <a
                  key={h.target}
                  href={`#${h.target}`}
                  className="flex justify-between items-center shadow p-2.5"
                >
                  {h.name} <FaArrowRight className="text-blue" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:w-4/6 lg:mx-auto flex flex-col gap-5">
            <LazyLoadImage
              src={oneBlog?.blogImage}
              alt="Bumrungrad International Hospital"
              effect="blur"
              className="w-full lg:h-[40vh] rounded"
            />
            <h5 className="font-semibold text-blue text-xl">
              {oneBlog?.blogTitle}
            </h5>
            <p>{oneBlog?.blogSlogan}</p>
            <div
              id="blog_desc"
              className="text-sm lg:text-base"
              dangerouslySetInnerHTML={{ __html: oneBlog?.blogDescription }}
            />
          </div>
        </div>
      )}
      {/* Scroll-to-top button */}
      {showScrollToTop && (
        <button
          className="fixed bottom-8 right-8 bg-blue text-white p-3 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-dark"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default OneBlog;
