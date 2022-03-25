import Food from './src/assets/Food.png';
import Calc from './src/assets/Calc.png';
import Cat from './src/assets/Cat.png';
import Recycle from './src/assets/Recycle.png';
import Burger from './src/assets/Burger.png';
import Lamp from './src/assets/Lamp.png';
import Car from './src/assets/Car.png';
import Bowl from './src/assets/Bowl.png';
import Flower from './src/assets/Flower.png';
import Chicken from './src/assets/Chicken.png';

const freshMission = [
    {title:'',img:'', date:'', reward:'', completed:true, pending:false, approved: false, chosen:false},

]
const newMission = [
    {title:'Help with baking',img:Bowl, date:'Saturday', reward:'2.00', completed:false, pending:false, approved: false, chosen:false},
    {title:'Help with gardening',img:Flower, date:'Sunday', reward:'5.00', completed:false, pending:false, approved: false, chosen:false},
    {title:'Feed chickens',img:{Chicken}, date:'Everyday', reward:'1.00', completed:false, pending:false, approved: false, chosen:false},
   
    
]
const myMission = [
    {title:'Feed cats',img:Cat, date:'Today', reward:'2.00', completed:false, pending:false, approved: false, chosen:true},
    {title:'Help with grocery shopping',img:Food, date:'Today', reward:'2.00', completed:false, pending:false, approved: false, chosen:true},
    {title:'Get an A on next math exam',img:Calc, date:'Tomorrow', reward:'10.00', completed:false, pending:false, approved: false, chosen:true},

]    
const needApproval = [
    
    {title:'Recycling ',img:Recycle, date:'', reward:'', completed:true, pending:true, approved: false, chose:true},
    {title:'Help with grocery shopping',img:Food, date:'Today', reward:'2.00', completed:true, pending:true, approved: false, chose:true},
    {title:'Pack lunch for school',img:Burger, date:'Tomorrow', reward:'5.00', completed:true, pending:true, approved: false, chose:true},
    {title:'Clean Room',img:Lamp, date:'Today', reward:'10.0', completed:true, pending:false, approved: true, chosen:true},
    {title:'Car wash with dad',img:Car, date:'Wednesday', reward:'2.00', completed:true, pending:false, approved: false, chosen:false},
]

const approvedMission = [
    {title:'Help with grocery shopping',img:'' , date:'today', reward:'2.00', complete: true, pending:false, approved: true, chosen:false},
    {title:'',img:'', date:'', reward:'', completed:true, pending:false, approved:true, chosen:false},
    {title:'Feed cats',img:Cat, date:'Today', reward:'2.00', completed:true, pending:false, approved: true, chosen:false},
    {title:'Help with grocery shopping',img:Food, date:'Today', reward:'2.00', completed:true, pending:false, approved: true, chosen:false},
    {title:'Get an A on next math exam',img:Calc, date:'Tomorrow', reward:'10.00', completed:true, pending:false, approved: true, chosen:false},
    {title:'Recycling ',img:Recycle, date:'', reward:'', completed:true, pending:false, approved: true, chosen:false},
    {title:'Help with grocery shopping',img:Food, date:'Today', reward:'2.00', completed:true, pending:false, approved: true, chosen:false},
    {title:'Pack lunch for school',img:Burger, date:'Tomorrow', reward:'5.00', completed:true, pending:false, approved: true, chosen:false},
    {title:'Clean Room',img:Lamp, date:'Today', reward:'10.0', completed:true, pending:false, approved: true, chosen:false},
    {title:'Car wash with dad',img:Car, date:'Wednesday', reward:'2.00', completed:true, pending:false, approved: true, chosen:false},
]




