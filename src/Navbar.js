import React,{useState} from 'react'
import App from './App';
import Regiment from './Regiment';
import Home from './Home'; 
import Operation from './Operation';
import Weapons from './Weapon';
import Vehcile from './Vehicle';


export const Navbar = () => { 

const [sol, setsol] = useState(0) ;
const [Reg, setreg] = useState(0) ;
const [home, setHome] = useState(1) ; 

const [view,setView]=useState([0,0,0,0,0])
//  Home(0) Sol(1) Reg(2) Weapon(3) Oper(4) vehcile(5)
function setSol() {


   const newView = new Array(5).fill(0);
   newView[1]=1;
   setView(newView) ;

}
function setReg() {

  const newView = new Array(5).fill(0);
  newView[2]=1;
  setView(newView) ;
 

}
function setHOME() {

  const newView = new Array(5).fill(0);
  newView[0]=1;
  setView(newView) ;

}
function setWeapon() {

  const newView = new Array(5).fill(0);
  newView[3]=1;
  setView(newView) ;

}
function setOperation() {

  const newView = new Array(5).fill(0);
  newView[4]=1;
  setView(newView) ;

}
function setVehcile() {

  const newView = new Array(5).fill(0);
  newView[5]=1;
  setView(newView) ;

}

  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <button class="btn navbar-brand" onClick={setHOME}>MIlitary Camp</button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class=" btn nav-link active" aria-current="page" onClick={setSol} >Soldiers</button>
        </li>
        <li class="nav-item">
          <button class="btn nav-link active " onClick={setReg}>Regiment</button>
        </li>
        <li class="nav-item">
          <button class="btn nav-link active " onClick={setWeapon}>Weapon</button>
        </li>
        <li class="nav-item">
          <button class="btn nav-link active " onClick={setOperation}>Operation</button>
        </li>
        <li class="nav-item">
          <button class="btn nav-link active " onClick={setVehcile}>Vehcile</button>
        </li>
      
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
 

   {view[0]==1 ? <Home/>:null} 
 
  {view[1]==1 ? <App/> : null}
  {view[2]==1? <Regiment/>:null}
  {view[3]==1? <Weapons/>:null}
  {view[4]==1? <Operation/>:null}
  {view[5]==1? <Vehcile/>:null}
  
  


    </div>
  )
}
