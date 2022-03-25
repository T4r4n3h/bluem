import React, { useEffect, useState } from 'react';
import Pocket from "../components/Pocket";
import Task from "../components/Task";
import Footer from "../components/Footer";
import oliviaimg from "../assets/Olivia.png";
import momimg from "../assets/Mom.png";
import Food from '../assets/Food.png';
import Calc from '../assets/Calc.png';
import Cat from '../assets/Cat.png';
import Recycle from '../assets/Recycle.png';
import Burger from '../assets/Burger.png';
import Lamp from '../assets/Lamp.png';
import Car from '../assets/Car.png';

const Wallet = (props) => {

    const [approvedMission, setApprovedMission] = useState([

        // { id: 2,title: 'Help with grocery shopping', img: Food, date: 'Today', reward: '2.00', completed: true, pending: false, approved: true, chosen: false },
        { id: 1,title: 'Feed cats', img: Cat, date: 'Today', reward: 2.00, completed: true, pending: false, approved: true, chosen: false },
        { id: 2,title: 'Help with grocery shopping', img: Food, date: 'Today', reward: 2.00, completed: true, pending: false, approved: true, chosen: false },
        { id: 3,title: 'Get an A on next math exam', img: Calc, date: 'Tomorrow', reward: 10.00, completed: true, pending: false, approved: true, chosen: false },
        { id: 4,title: 'Recycling ', img: Recycle, date: 'Today', reward: 1.00, completed: true, pending: false, approved: true, chosen: false },
        { id: 5,title: 'Pack lunch for school', img: Burger, date: 'Tomorrow', reward: 5.00, completed: true, pending: false, approved: true, chosen: false },
        { id: 6,title: 'Clean Room', img: Lamp, date: 'Today', reward: 10.0, completed: true, pending: false, approved: true, chosen: false },
        { id: 7,title: 'Car wash with dad', img: Car, date: 'Wednesday', reward: 2.00, completed: true, pending: false, approved: true, chosen: false },
    ])
    
    const [total, setTotal] = useState(0)
  
  
     const handleClick = (id) => {
        console.log(`this is the id ${id} please log `)
        for(let i = 0; i <approvedMission.length; i++) {
          if(approvedMission[i].id === id) {
            setTotal(approvedMission[i].reward+=total)
            setApprovedMission(approvedMission.filter(mission => mission.id !== id))
  
          }
        }
      console.log(total)
      }
      useEffect(() => {
  
      },[])
    
    return (
      <div className="home-page">
        {/* Header */}
        <div className="pt-5">
          <img
            className="mx-auto"
            src={oliviaimg}
            alt="Account Icon"
            width="50"
            height="50"
          />
          <p className="mt-2 pb-6 text-2xl text-center font-normal">
            Hi, Olivia
          </p>
        </div>

        {/* Pocket */}
        <Pocket 
        total={total}
         />

        {/* Show Index of Selected Missions */}
        <div className="mx-auto">
          <p className="mt-8 ml-10 pb-3 text-xl font-semibold">
            My Mission
            <svg
              className="shadow-2xl inline mt--10 ml-1"
              width="5"
              height="5"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#FF453A" />
            </svg>
          </p>
          {approvedMission.map((mission) => (
            <Task
              key={mission.id}
              title={mission.title}
              img={mission.img}
              date={mission.date}
              reward={mission.reward}
              handleClick={(id) => handleClick(mission.id)}
            />
          ))}
        </div>

        {/*  Nav Bar */}
        <Footer />
      </div>
    );
};

export default Wallet