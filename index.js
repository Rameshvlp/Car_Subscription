const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))


const carroute = require("./routes/carroute");
 const userRoute = require("./routes/userRoute")



app.use('/dash', carroute)
app.use('/', userRoute)


app.listen(5000, ()=>{
    console.log("Server Listening on port");
})


