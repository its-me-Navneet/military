import React,{useState,useEffect} from 'react'

 const Operation = () => {
    const [ListOperation, setListReg] = useState([]) ;
  
   
    async function Display(){
    
     
      const response2 =await fetch("http://localhost:8000/getOperations", {
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
        <th scope="col">OperationCode</th>
        <th scope="col">OperationName</th>
        <th scope="col">Start Date</th>
        <th scope="col">End Date</th>
        <th scope="col">Outcome</th>
     
      </tr>
    </thead>
   
  
     
       {ListOperation.map((x,index) => {
          return  ( 
            
            <tbody>
      <tr>
        <th scope="row">{index+1}</th>
        <td>{x.OperationCode}</td>
        <td>{x.Oname}</td>
        <td>{x.StartDate}</td>
        <td>{x.EndDate}</td>
        <td>{x.Outcome}</td>
       
      </tr>
    
    </tbody> 
        
  
          ); 
         
        })}
    
  </table>
      </div>
    );
  }

export default Operation