import React from 'react'
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const SignUpForm = () => {
    return (
      <div>
        <div className="logo w-1/2 h-12 mx-auto h-40">
          <img className="mx-auto" src={Logo} alt="" />
        </div>
        <h1 className="text-3xl font-bold text-center text-cornflowerblue ">
          Bluem
        </h1>
        <div className="form-center">
          <form className="pl-3 h-96">
            <label className="">
              <span>
                <p className="text-base pb-2 pt-3">Name</p>
              </span>
              <input
                className="w-80 h-12 rounded-medium shadow pl-2"
                name="title"
                value=""
              />
            </label>
            <label>
              <span>
                <p className="text-base pb-2 pt-3">Email address</p>
              </span>
              <input
                className="w-80 h-12 rounded-medium shadow pl-2"
                name="date"
                value=""
              />
            </label>
            <label>
              <span>
                <p className="text-base pb-2 pt-3">Password</p>
              </span>
              <input
                className="w-80 h-12 rounded-medium shadow pl-2"
                name="reward"
                value=""
              />
            </label>

            <Link to="/login">
              <button className="block bg-cornflowerblue w-80 h-12 rounded-medium text-base text-reallywhite shadow mt-24">
                Sign up
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
}

export default SignUpForm