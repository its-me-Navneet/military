const mongoose = require("mongoose") ;


const RegimentSchema =new mongoose.Schema({
     
    RegimentCode:{
         type:String,
         required:true
    },
    Rname:{
         type:String ,
         required:true
    },
    HQCity :{
      type:String,
       
    },
    CuurentStrength:{
        type:String ,

    },
    CommanderId:{  
        type:String, 
        required:true
    }


}) 

 const User = mongoose.model('regiment',RegimentSchema) ;
module.exports = User ;