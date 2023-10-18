import React,{useState} from 'react'
import App from './App';
import Regiment from './Regiment';
import Home from './Home';
export const Navbar = () => { 

const [sol, setsol] = useState(0) ;
const [Reg, setreg] = useState(0) ;
const [home, setHome] = useState(1) ;

function setSol() {

   setsol(1) ;
   setreg(0) ;
   setHome(0) ;

}
function setReg() {

  setsol(0) ;
  setreg(1) ;
  setHome(0) ;

}
function setHOME() {

  setsol(0) ;
  setreg(0) ;
  setHome(1) ;

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
       
      
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
 

   {home==1 ? <Home/>:null} 
 
  {sol==1 ? <App/> : null}
  {Reg==1? <Regiment/>:null}
  
  


    </div>
  )
}
