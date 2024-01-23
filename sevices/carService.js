const {insertCar} = require("../Daos/cardao")

function insertc(req,res)
{
    insertCar(req.body.model, req.body.fueltype, req.body.seater);
}
 function retrive(req, res){
    res.send("hello")

 }
module.exports = {insertc, retrive}