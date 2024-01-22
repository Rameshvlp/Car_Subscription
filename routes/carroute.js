const express = require("express")
const route =  express.Router()
const path = require('path');
const {insertc} = require("../sevices/carService")



route.get("/", (req, res)=>{
    res.send("dashboard's home page")
})

route.get("/car", (req, res)=>{
    res.sendFile(path.join(__dirname, '../public','index.html'))
})

route.post("/submitform", (req, res)=>{
    insertc(req,res)

})


module.exports = route