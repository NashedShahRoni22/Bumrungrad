import React from "react";
import image from "../../assets/news/image.jpg";
import image1 from "../../assets/news/image (1).jpg";
import image2 from "../../assets/news/image (2).jpg";

export default function News() {
  const data = [
    {
      img: image,
      title: "The Bumrungrad Health Villa Retreat in Bang Krachao",
      desc: "Located 45 minutes from the center of Bangkok, the integrative holistic rehabilitation health villa is surrounded by nature in the peaceful and beautiful green lung of Bang Krachao.",
    },
    {
      img: image1,
      title: "Let our obstetrician team take care of you and your baby!",
      desc: "Baby delivery packages at exclusive prices",
    },
    {
      img: image2,
      title: "The Bumrungrad Health Villa Retreat in Bang Krachao",
      desc: "Located 45 minutes from the center of Bangkok, the integrative holistic rehabilitation health villa is surrounded by nature in the peaceful and beautiful green lung of Bang Krachao.",
    },
  ];
  return (
    <div className="p-5 md:p-10 my-5 md:container md:mx-auto">
      <h1 className="capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue">
        Bumrungrad News
      </h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 my-10">
        {data.map((d,i) => (
          <div key={i} className="shadow rounded hover:shadow-xl duration-300 ease-linear">
            <img src={d.img} alt="" className="" />
            <div className="p-4">
              <h5 className="font-semibold text-blue text-lg">{d.title}</h5>
              <h5 className="my-3">{d.desc}</h5>
              <button className="border border-blue bg-blue hover:bg-white px-2 py-1 rounded hover:text-blue text-white duration-300 ease-linear">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
