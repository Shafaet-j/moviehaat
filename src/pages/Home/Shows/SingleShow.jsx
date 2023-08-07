import React from "react";
import { Link } from "react-router-dom";

const SingleShow = ({ show }) => {
  console.log(show.show);
  return (
    <div className=" shadow-xl max-w-sm">
      <figure>
        <img
          className=" w-full rounded-lg object-cover max-h-[512px] hover:scale-110 duration-300"
          src={show.show.image && show.show.image.original}
          alt="Movie image"
        />
      </figure>
      <div className=" text-left space-y-8 ps-5">
        <h2 className=" text-white text-2xl text-left mt-5">
          {show.show.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="flex gap-4 mb-4">
          {show.show.genres.map((genre, ind) => (
            <div
              key={ind}
              className="badge badge-outline border-[#e4d804] text-white"
            >
              {genre}
            </div>
          ))}
        </div>
        <div>
          <Link to={`/shows/${show.show.name}`}>
            <button className=" bg-[#e4d804] px-6 font-bold py-2 rounded-full hover:bg-[#c0b600] duration-500 mb-6">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleShow;
