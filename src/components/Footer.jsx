import React from 'react'
import { Link } from 'react-router-dom'
import mission from '../assets/Mission.png'
import profile from '../assets/Profile.png'
import wallet from '../assets/Wallet.png'

const Footer = () => {
  return (
    <div className="relative">
      <div className="footer fixed flex bottom-0 mx-auto justify-around bg-reallywhite w-screen h-14">
        <div className=""><Link to="/mission">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-2 h-5 w-5 text-gray"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
          
            <p className="text-center text-xs mt-1 mb-3 text-gray">Mission</p>
          </Link>
        </div>

        <div className=""><Link to="/wallet">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-2 h-5 w-5 text-gray"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          
            <p className="text-center text-xs mt-1 mb-3 text-gray">Wallet</p>
          </Link>
        </div>

        <div className=""><Link to="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-2 h-5 w-5 text-gray"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          
            <p className="text-center text-xs mt-1 mb-3 text-gray">Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer