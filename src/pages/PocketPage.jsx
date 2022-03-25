import React,{useState} from 'react'
import Balance from '../components/Balance';
import Task from '../components/Task';
import Recycle from '../assets/Recycle.png'
import Food from '../assets/Food.png'
import Burger from '../assets/Burger.png'
import Lamp from '../assets/Lamp.png'
import Car from '../assets/Car.png'
import Cat from '../assets/Cat.png'
import Calc from '../assets/Calc.png'

const PocketPage = () => {
  const [approvedMission, setApprovedMission] =useState(

    [
      
      {title:'Feed cats',img:Cat, date:'Today', reward:'2.00', completed:true, pending:false, approved: true, chosen:false},
      {title:'Get an A on next math exam',img:Calc, date:'Tomorrow', reward:'10.00', completed:true, pending:false, approved: true, chosen:false},
      {title:'Recycling ',img:Recycle, date:'Today', reward:'3.00', completed:true, pending:false, approved: true, chosen:false},
      {title:'Help with grocery shopping',img:Food, date:'Today', reward:'2.00', completed:true, pending:false, approved: true, chosen:false},
      {title:'Pack lunch for school',img:Burger, date:'Tomorrow', reward:'5.00', completed:true, pending:false, approved: true, chosen:false},
      {title:'Clean Room',img:Lamp, date:'Today', reward:'10.00', completed:true, pending:false, approved: true, chosen:false},
      {title:'Car wash with dad',img:Car, date:'Wednesday', reward:'2.00', completed:true, pending:false, approved: true, chosen:false},
  ]
  ) 

  return (
    <div>
      <Balance/>
      <p className="title">Completed Mission</p>
     {approvedMission.map((mission) => (
       <Task title={mission.title} img={mission.img} date={mission.date} reward={mission.reward}/>

       ))}

    </div>
  );
}

export default PocketPage