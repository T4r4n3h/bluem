import React from 'react'
import mcicon from "../assets/MCIcon.png";
import { Link } from "react-router-dom";
import oliviaimg from "../assets/Olivia.png";
import momimg from "../assets/Mom.png";

const Balance = () => {
    return (
      <div className="text-center mb-8 rounded-b-large mx-auto w-screen h-56 bg-cornflowerblue text-reallywhite shadow-2xl">
        <div className="">
          <Link to="/wallet">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 pl-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
        </div>

        <div className="">
          <img
            className="mx-auto"
            src={oliviaimg}
            alt="Account Icon"
            width="50"
            height="50"
          />
          <p className="text-base mt-8 font-medium">Current Balance</p>
          <p className="text-3xl tracking-widest font-bold">$23.00</p>
        </div>
      </div>
    );
}

export default Balance;