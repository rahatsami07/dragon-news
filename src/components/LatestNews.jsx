import React from "react";
import Marquee from "react-fast-marquee";

const LeatestNews = () => {
  return (
    <div className="flex my-5 bg-base-200 gap-3 p-3 items-center">
      <p className="text-base-100 bg-secondary px-3 py-2 ">Latest</p>
      <Marquee pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          enim?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          enim?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          enim?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          enim?
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          enim?
        </p>
      </Marquee>
    </div>
  );
};

export default LeatestNews;
