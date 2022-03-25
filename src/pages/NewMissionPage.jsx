import React from 'react'
import Task from '../components/Task'
import back from '../assets/Back.png'
import Bowl from '../assets/Bowl.png';
import Flower from '../assets/Flower.png';
import Chicken from '../assets/Chicken.png';



const NewMissionPage = () => {


const newMission = [
  {title:'Help with baking',img:Bowl, date:'Saturday', reward:'2.00', completed:false, approved: false, chosen:false},
  {title:'Help with gardening',img:Flower, date:'Sunday', reward:'5.00', completed:false, approved: false, chosen:false},
  {title:'Feed chickens',img:Chicken, date:'Everyday', reward:'1.00', completed:false, approved: false, chosen:false},

  
]
  return (
    <div>
      <div className="flex relative pb-5">
        <div className="flex-auto pt-4 pl-3">
          <h1 className="title">New Mission</h1>{" "}
        </div>
        <div className="flex-auto pt-5 pr-4 absolute right-0">
          <img src={back} alt="Back Icon" width="12" height="12" />
        </div>
      </div>
      <div className="relative mt-10">
        <div className="center absolute">

          {newMission.map(mission =>(
             <Task title={mission.title} img={mission.img} date={mission.date} reward={mission.reward}/>
          ))}
        

          <button className="absolute bg-lightgray w-80 h-12 rounded-medium text-base text-reallywhite shadow mt-10">
            Add to My Mission
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewMissionPage