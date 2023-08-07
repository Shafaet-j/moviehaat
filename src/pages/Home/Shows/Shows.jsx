import React, { useEffect, useState } from "react";
import SingleShow from "./SingleShow";

const Shows = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);
  return (
    <section className=" container mx-auto my-20">
      <h1 className=" text-5xl font-bold text-[#e4d804] my-12">
        Popular shows
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-7 px-5 justify-items-center md:grid-cols-2">
        {shows.map((show) => (
          <SingleShow key={show.show.id} show={show}></SingleShow>
        ))}
      </div>
    </section>
  );
};

export default Shows;
