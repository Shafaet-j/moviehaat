import React from "react";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero h-[90vh] bg-gradient-to-r to-blue-500"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15,7,113, 0.6), rgba(5, 5, 5, 0.4)),url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 font-bold text-6xl text-white">
            Unlimited Movie, <span className=" text-[#e4d804]">TVs Shows</span>,
            & More
          </h1>
          <p className="mb-5 text-xl text-white">
            Stream full seasons of exclusive series, current-season episodes,
            <br /> hit movies, Dali originals, kids shows, and more..
          </p>
          <button className=" bg-[#12151e] border-[#e4d804] border-2 px-8 font-bold py-3 rounded-full hover:bg-[#e4d804] hover:text-[#12151e] duration-500">
            Watch now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
