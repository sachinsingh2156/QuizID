import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <center>
      <div className="border-solid border-2 border-black w-96 my-20 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-20 h-20 mt-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>

        <input
          type="text"
          id="Name"
          placeholder="Full Name"
          required
          className="mt-8 border border-black h-12 w-72 p-4"
        />
        <input
          type="number"
          id="Mobile"
          placeholder="Mobile No."
          required
          className="mt-8 border border-black h-12 w-72 p-4"
        />
        <br />
        <input
          type="email"
          id="userEmail"
          placeholder="Email Id"
          required
          className="mt-8 border border-black h-12 w-72 p-4"
        />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          className="m-8 border border-black h-12 w-72 p-4"
        />
        <br />
        <button className="text-xl m-8 py-2 px-4 rounded-lg  border border-gray-700 hover:bg-[#9ce5f0]">
          Submit
        </button>
        <br />
        <Link
          to="/Signup"
          className="flex justify-end mr-4 hover:text-cyan-600"
        >
          Already Registered?
        </Link>
        <br />
      </div>
    </center>
  );
};

export default Signup;
