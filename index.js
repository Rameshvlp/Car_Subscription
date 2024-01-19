const express = require('express');
const app = express();

app.get('/dashboard', (req, res)=>{
    res.send("dashboard page")
})

app.listen(8000, ()=>{
    console.log("Server Listening on port");
})


