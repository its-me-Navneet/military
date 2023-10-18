const mongoose=require('mongoose'); 


const Soldiers=new mongoose.Schema({
    SId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    DoB : Date ,
    DoJ :Date,
    Height:String,
    Weight:String,
    Gender :String,
    District:String,
    RegimentCode:String,
    Srank:String,
});
const scheme=mongoose.model('soldiers',Soldiers); 

module.exports=scheme;