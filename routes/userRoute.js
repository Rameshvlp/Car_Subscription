const express = require("express")
const route =  express.Router()
const path = require('path');
const {insertU} = require('../sevices/userServices');

route.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../FrontEnd', 'userDetails.html'));
})

route.post("/submitform", (req, res)=>{
    
    insertU(req,res);
    res.send("User Created SucessFully")
})

module.exports=route;