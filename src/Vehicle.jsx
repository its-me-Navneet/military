import React,{useState,useEffect} from 'react'

 const Vehcile = () => {
    const [ListVehcile, setVehcile] = useState([]) ;
  
   
    async function Display(){
    
     
      const response2 =await fetch("http://localhost:8000/getVehciles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Content-Type': 'application/x-www-form-urlencoded',
        }, 
       
      });
      const json2 =  await response2.json();
      
      setVehcile(json2) ; 
     
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
        <th scope="col">Vehcile Code</th>
        <th scope="col">Vehcile Name</th>
        <th scope="col">Vehcile Type </th>
        <th scope="col">Fuel Type</th>
        <th scope="col">Man Year</th>
     
      </tr>
    </thead>
   
  
     
       {ListVehcile.map((x,index) => {
          return  ( 
            
            <tbody>
      <tr>
        <th scope="row">{index+1}</th>
        <td>{x.VehcileID}</td>
        <td>{x.Vname}</td>
        <td>{x.Vtype}</td>
        <td>{x.FuelType}</td>
        <td>{x.ManYear}</td>
        
       
      </tr>
    
    </tbody> 
        
  
          ); 
         
        })}
    
  </table>
      </div>
    );
  }

export default Vehcile