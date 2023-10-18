const express = require('express');
const app = express();
app.use(express.json());
var cors = require('cors')
app.use(cors())

const Regiment =require('./models/Regiment') ;
const Soldier = require('./models/Soldiers')

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

server=app.listen(8000, () => {
    console.log("server at port 8000");
});
 
    mongoose.connect(db, console.log("Connected to mongo Successful")
       );
