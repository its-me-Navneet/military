const express = require('express');
const app = express();
app.use(express.json());
var cors = require('cors')
app.use(cors())

const Regiment =require('./models/Regiment') ;
const Soldier = require('./models/Soldiers');
const Weapon =require('./models/Weapon');
const Operation =require('./models/Operation');
const Vehcile =require('./models/Vehicles');

const mongoose = require('mongoose');

const db = "mongodb+srv://navneet:navneet1712@demo.wt1l3ed.mongodb.net/?retryWrites=true&w=majority"; 



app.get("/getSoldiers",async(req,res)=>{ 
    try {
        
            const soldier=await Soldier.find() ; 
         
            res.send(soldier) ;
         
    } catch (error) {
         return res.status(500).json("Internal error occured") ;
    } 



})

app.get("/getRegiments",async(req,res)=>{ 
    try {
           
            const regiment=await Regiment.find() ; 
            res.send(regiment) ;
         
    } catch (error) {
         return res.status(500).json("Internal error occured") ;
    } 



})

app.get("/getOperations",async(req,res)=>{ 
    try {
           
            const operation=await Operation.find() ; 
            res.send(operation) ;
         
    } catch (error) {
         return res.status(500).json("Internal error occured") ;
    } 

}) 

app.get("/getWeapons",async(req,res)=>{ 
    try {
           
            const weapon=await Weapon.find() ; 
            res.send(weapon) ;
         
    } catch (error) {
         return res.status(500).json("Internal error occured") ;
    } 



})

app.get("/getVehciles",async(req,res)=>{ 
    try {
           
            const vehcile=await Vehcile.find() ; 
            res.send(vehcile) ;
         
    } catch (error) {
         return res.status(500).json("Internal error occured") ;
    } 

})

server=app.listen(8000, () => {
    console.log("server at port 8000");
});
 
    mongoose.connect(db, console.log("Connected to mongo Successful")
       );
