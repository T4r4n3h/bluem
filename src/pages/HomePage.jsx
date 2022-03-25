import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-cornflowerblue h-screen text-reallywhite pt-20">
      <div className="logo w-1/2 h-12 mx-auto h-40">
        <img
          className="mx-auto"
          // style={{height: '150%', width: '150%'}}
          src={Logo}
          alt=""
        />
      </div>
      <h1 className="text-3xl font-bold text-center ">Bluem</h1>

      <div className="message mt-14">
        <p className="text-center text-2xl font-semibold mt-3 mx-auto  w-[17rem] ">
          Teach your children
          <br /> how to earn, spend, and <br />
          save money
        </p>
      </div>
      <Link to="/signup">
        <button
          className="bg-reallywhite ml-7 w-80 h-12 rounded-medium text-base text-cornflowerblue 
        shadow mt-24"
        >
          Sign up
        </button>
      </Link>

      <p className="text-center mt-5 mb-14">
        Already have an account?<Link to="/login">&nbsp;Log in</Link>
      </p>
    </div>
  );
}

export default HomePage