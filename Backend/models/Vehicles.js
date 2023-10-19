const mongoose = require("mongoose") ;


const VehcileSchema =new mongoose.Schema({
     
     VehcileID:{
         type:String,
         required:true
    },
    Vname:{
         type:String ,
         },
    Vtype :{
      type:String,
       
    },
    FuelType:{
        type:String ,

    },
    ManYear:{  
        type:String, 
        
    }

}) 

const Vehcile = mongoose.model('vehcile',VehcileSchema) ;
module.exports = Vehcile ;