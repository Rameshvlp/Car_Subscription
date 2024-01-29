const express = require("express")
const route =  express.Router();   
const path = require('path');
const {insertc, retriveC} = require("../sevices/carService"); 

route.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, '../FrontEnd', 'Retrive.html'))

});

route.get("/retrive", (req, res)=>
{
res.sendFile(path.join(__dirname, '../FrontEnd', 'retrivalData.html'))
})

route.post("/retrive", (req, res)=>{

retriveC(req, res);
}
)
    
route.get("/car", (req, res)=>{
    res.sendFile(path.join(__dirname, '../FrontEnd','index.html'))
})

route.post("/submitform", (req, res)=>{
    console.log(req.body);
    insertc(req,res);
    res.send("car models created sucessfully")

})   


module.exports = route