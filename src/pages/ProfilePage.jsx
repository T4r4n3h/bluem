import React from 'react'
// import oliviaimg from '../assets/Olivia.png'
import momwhitebg from '../assets/WhiteIcon.png'
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
<div>
    <div className="w-screen h-screen form-center">
      <div className="mt-10 ">
        <img
          className="mx-auto"
          src={momwhitebg}
          alt="Account Icon"
          width="100"
          height="100"
        />
        <p className="text-center text-lg mt-3">Mom</p>
        <a
          target="_blank"
          href="https://www.td.com/ca/en/personal-banking/how-to/budgeting/how-to-financial-literacy-for-kids/#:~:text=Financial%20literacy%20is%20also%20something,become%20more%20financially%20confident%20adults."
        >
          <button className="bg-limegreen w-80 h-12 rounded-medium text-base shadow mt-12">
            Financial Resources
          </button>
        </a>
      </div>
    </div>
      <Footer />
  </div>
  );
}

export default ProfilePage