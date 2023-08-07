import React from "react";
import { Link } from "react-router-dom";

const SingleShow = ({ show }) => {
  console.log(show.show);
  return (
    <div className=" shadow-xl max-w-sm pb-6">
      <figure>
        <img
          className=" w-full rounded-lg h-2/3"
          src={show.show.image && show.show.image.medium}
          alt="Shoes"
        />
      </figure>
      <div className=" text-left space-y-8 ps-5">
        <h2 className=" text-white text-2xl text-left mt-5">
          {show.show.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="card-actions">
          {show.show.genres.map((genre, ind) => (
            <div
              key={ind}
              className="badge badge-outline border-[#e4d804] text-white"
            >
              {genre}
            </div>
          ))}
        </div>
        <Link>
          <button className=" mb-6 bg-[#e4d804] px-6 font-bold py-2 rounded-full hover:bg-[#c0b600] duration-500">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleShow;
