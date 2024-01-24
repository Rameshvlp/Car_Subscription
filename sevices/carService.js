const {insertCar, RetriveCar} = require("../Daos/cardao")

function insertc(req,res)
{
    insertCar(req.body.model, req.body.fueltype, req.body.seater);
}
 function retriveC(req, res){
    RetriveCar().then((msg)=>res.send(msg));

 }
module.exports = {insertc, retriveC}