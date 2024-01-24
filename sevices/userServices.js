const {insertUser} = require('../Daos/userdao');

function insertU(req,res){
    insertUser(req.body.Name, req.body.Age, req.body.PhoneNumber, req.body.Address, req.body.LicenceNo);
}

module.exports={insertU};