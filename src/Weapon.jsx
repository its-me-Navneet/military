import React,{useState,useEffect} from 'react' 


 const Weapons = () => {
    const [ListWeapons, setListReg] = useState([]) ;
  
   
    async function Display(){
    
     
      const response2 =await fetch("http://localhost:8000/getWeapons", {
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
        <th scope="col">Weapons Code</th>
        <th scope="col">Weapons Name</th>
        <th scope="col">Weapon Type</th>
       
     
      </tr>
    </thead>
   
  
     
       {ListWeapons.map((x,index) => {
          return  ( 
            
            <tbody>
      <tr>
        <th scope="row">{index+1}</th>
        <td>{x.WeaponID}</td>
        <td>{x.Wname}</td>
        <td>{x.Wtype}</td>
       
      </tr>
    
    </tbody> 
        
  
          ); 
         
        })}
    
  </table>
      </div>
    );
  }

export default Weapons