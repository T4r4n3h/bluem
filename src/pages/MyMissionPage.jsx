import React, {useState} from 'react'
import Footer from "../components/Footer";
import Task from "../components/Task";

import Food from '../assets/Food.png';
import Calc from '../assets/Calc.png';
import Cat from '../assets/Cat.png';
import Recycle from '../assets/Recycle.png';
import Burger from '../assets/Burger.png';
import Lamp from '../assets/Lamp.png';
import Car from '../assets/Car.png';
const MyMissionPage = () => {

  const [myMission,setMymission] =useState(

    [
     {title:'Feed cats',img:Cat, date:'Today', reward:'2.00', completed:false, pending:false, approved: false, chosen:true},
     {title:'Help with grocery shopping',img:Food, date:'Today', reward:'2.00', completed:false, pending:false, approved: false, chosen:true},
     {title:'Get an A on next math exam',img:Calc, date:'Tomorrow', reward:'10.00', completed:false, pending:false, approved: false, chosen:true},
 
 ] 
  )
  const [needApproval, setNeedApproval] =useState(
    [
      
    {title:'Recycling ',img:Recycle, date:'Tomorrow', reward:'9.00', completed:true, pending:true, approved: false, chose:true},
    {title:'Help with grocery shopping',img:Food, date:'Today', reward:'2.00', completed:true, pending:true, approved: false, chose:true},
    {title:'Pack lunch for school',img:Burger, date:'Tomorrow', reward:'5.00', completed:true, pending:true, approved: false, chose:true},
    {title:'Clean Room',img:Lamp, date:'Today', reward:'10.00', completed:true, pending:false, approved: true, chosen:true},
    {title:'Car wash with dad',img:Car, date:'Wednesday', reward:'2.00', completed:true, pending:false, approved: false, chosen:false},
  ]
  ) 
  

  
  return (
    <div className="">
      <p className="pt-5 pb-3 pl-4 text-xl font-semibold">My Mission</p>
      {myMission.map(mission =>(
             <Task title={mission.title} img={mission.img} date={mission.date} reward={mission.reward}/>
          ))}

    
      <div class="flex justify-center items-center">
      <button className="bg-reallywhite w-80 h-12 rounded-medium text-base shadow mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-cornflowerblue mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button></div>
      <p className="pt-8 pb-3 pl-4 text-xl font-semibold">Approval Needed</p>
      {needApproval.map(mission =>(
             <Task title={mission.title} img={mission.img} date={mission.date} reward={mission.reward}/>
          ))}
     
      <Footer />
    </div>
  );
}

export default MyMissionPage