import { useState,useEffect } from 'react';
import './App.css';
import { Navbar } from './Navbar'; 





 function App() { 
  const [List, setList] = useState([]) ;
  const [ListRegiment, setListReg] = useState([]) ;
  
   
  async function Display(){
  
    const response =await fetch("http://localhost:8000/getSoldiers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',
      }, 
     
    });
    const json =  await response.json();
    //  console.log(json) ; 
    setList(json) ; 

    const response2 =await fetch("http://localhost:8000/getRegiments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',
      }, 
     
    });
    const json2 =  await response2.json();
    
    setListReg(json2) ; 
   
  

  }
  
  useEffect(() => {
    
    Display();
  }, [])
  
 

  return (
    <div className="App">
 
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">DoB</th>
      <th scope="col">DoJ</th>
      <th scope="col">Height</th>
      <th scope="col">Weight</th>
      <th scope="col">Weight</th>
      <th scope="col">Gender</th>
      <th scope="col">RegimentCode</th>
      <th scope="col">SRank</th>
    </tr>
  </thead>


   
     {List.map((x,index) => {
        return  ( 
          
          <tbody>
    <tr>
      <th scope="row">{index+1}</th>
      <td>{x.name}</td>
      <td>{x.DoB}</td>
      <td>{x.name}</td>
      <td>{x.Weight}</td>
      <td>{x.Height}</td>
      <td>{x.Srank}</td>
      <td>{x.Gender}</td>
      <td>{x.RegimentCode}</td>
      <td>{x.Srank}</td>
     
    </tr>
  
  </tbody> 
      

        ); 
       
      })}
  
</table>
    </div>
  );
}

export default App;


