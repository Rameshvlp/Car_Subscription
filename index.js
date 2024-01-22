const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))


const carroute = require("./routes/carroute")



app.use('/dash', carroute)

app.get('/', (req, res)=>{
    res.send("original homepage")
})


app.listen(8000, ()=>{
    console.log("Server Listening on port");
})


