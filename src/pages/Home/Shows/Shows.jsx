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
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-7 px-5">
        {shows.map((show) => (
          <SingleShow key={show.show.id} show={show}></SingleShow>
        ))}
      </div>
    </section>
  );
};

export default Shows;
