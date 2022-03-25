import React from 'react'
import mcicon from "../assets/MCIcon.png";
import { Link } from "react-router-dom";

const Pocket = (props) => {
  return (
    <div className="flex justify-around mx-auto w-80 h-48 bg-cornflowerblue text-reallywhite rounded-large shadow-2xl">
      <div className="">
        <p className="text-base mt-8 font-medium">Olivia's Pocket</p>
        <p className="text-3xl tracking-widest font-bold"> <span>$</span>{props.total}</p>
      </div>

      <div className="relative">
        <Link to="/pocket">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 ml-12 absolute top-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
        <img
          className=""
          src={mcicon}
          alt="Account Icon"
          width="70"
          height="70"
        />
      </div>
    </div>
  );
}

export default Pocket