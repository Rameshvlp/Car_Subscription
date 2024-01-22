const {insertCar} = require("../Daos/cardao")

function insertc(req,res)
{
    insertCar(req.body.carmodel, req.body.fueltype, req.body.seater);
}
module.exports = {insertc}