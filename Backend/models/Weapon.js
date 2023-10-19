const mongoose = require("mongoose") ;


const WeaponSchema =new mongoose.Schema({
     
    WeaponID:{
         type:String,
         required:true
    },
    Wname:{
         type:String ,
         required:true
    },
    Wtype :{
      type:String,
       
    }


}) 

 const Weapon = mongoose.model('weapon',WeaponSchema) ;
module.exports = Weapon ;