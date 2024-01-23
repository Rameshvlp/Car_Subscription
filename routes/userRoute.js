const express = require("express")
const route =  express.Router()
const path = require('path');
const {insertU} = require('../sevices/userServices');

route.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../FrontEnd', 'userDetails.html'));
})

module.exports=route;