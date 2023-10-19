const mongoose = require("mongoose") ;


const OperationSchema =new mongoose.Schema({
     
    OperationCode:{
         type:String,
         required:true
    },
    Oname:{
         type:String ,
         required:true
    },
    StartDate :{
      type:String,
       
    },
    EndDate:{
        type:String ,

    },
    Outcome:{  
        type:String, 
   
    }


}) 

 const Operation = mongoose.model('operation',OperationSchema) ;
module.exports = Operation ;