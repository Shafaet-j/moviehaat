import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ShowDetails = () => {
  const show = useLoaderData();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Save name and phone to local storage
    localStorage.setItem("user_name", name);
    localStorage.setItem("user_phone", phone);
    toast.success("Successfully Booked!");

    // Close the form
    setShowForm(false);
  };

  return (
    <div
      className="hero min-h-screen -mt-[6.25rem]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15,7,113, 0.6), rgba(5, 5, 5, 0.4)),url(${
          show.image && show.image.original
        })`,
        backgroundPosition: "top",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" text-left text-white">
          <h1 className="text-6xl font-bold text-[#e4d804]">{show.name}</h1>
          <div className=" flex items-center gap-5 mt-5">
            <p>
              <span className=" text-[#e4d804]">Runtime</span>: {show.runtime}{" "}
              min.
            </p>
            <p>
              <span className=" text-[#e4d804]">Rating</span>:{" "}
              {show?.rating?.average}
            </p>
          </div>
          <p className="py-6 w-1/2">{show.summary}</p>
          <div className=" flex items-center gap-6">
            <button
              className="btn bg-[#12151e] border-[#e4d804] border-2 px-8 font-bold py-3 rounded-full hover:bg-[#e4d804] hover:text-[#12151e] duration-500 hover:border-[#e4d804] text-white"
              onClick={handleBookNowClick}
            >
              Book now
            </button>
            <button className="btn  bg-[#e4d804] border-[#e4d804] border-2 px-8 font-bold py-3 rounded-full hover:bg-[#12151e] hover:text-[#ffffff] duration-500 hover:border-[#e4d804] text-black">
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Book Tickets</h2>
            <p className=" text-center text-2xl font-bold">{show.name}</p>
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Your Name"
                  className="input input-bordered w-full max-w-xs"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="form-control w-full max-w-xs mb-5">
                <label className="label">
                  <span className="label-text">Your Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Your Phone"
                  className="input input-bordered w-full max-w-xs"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              {/* Add more relevant fields for user details */}
              <button
                type="submit"
                className="btn bg-[#12151e] border-[#e4d804] border-2 px-8 font-bold py-3 rounded-full hover:bg-[#e4d804] hover:text-[#12151e] duration-500 hover:border-[#e4d804] text-white"
              >
                Submit
              </button>
            </form>
            <button
              className="btn mt-4 bg-[#e4d804] border-[#e4d804] border-2 px-8 font-bold py-3 rounded-full hover:bg-[#12151e] hover:text-[#ffffff] duration-500 hover:border-[#e4d804] text-black"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
