import React,{useState,useEffect} from 'react'

const Regiment = () => {
    const [ListRegiment, setListReg] = useState([]) ;
  
   
    async function Display(){
    
     
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
        <th scope="col">RegCode</th>
        <th scope="col">RegName</th>
        <th scope="col">HQCity</th>
        <th scope="col">MaxTrength</th>
        <th scope="col">CommanderId</th>
     
      </tr>
    </thead>
   
  
     
       {ListRegiment.map((x,index) => {
          return  ( 
            
            <tbody>
      <tr>
        <th scope="row">{index+1}</th>
        <td>{x.RegimentCode}</td>
        <td>{x.Rname}</td>
        <td>{x.HQCity}</td>
        <td>{x.CuurentStrength}</td>
        <td>{x.CommanderId}</td>
       
      </tr>
    
    </tbody> 
        
  
          ); 
         
        })}
    
  </table>
      </div>
    );
  }

export default Regiment