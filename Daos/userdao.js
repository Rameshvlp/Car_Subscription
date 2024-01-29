const {getCollection}= require('./connection');

function insertUser(UserName, Age, PhoneNumber, Address, LicenceNo){
    
    const collection =getCollection("CustomerDetails");
    collection.insertOne({Name:UserName, Age:Age, PhoneNumber:PhoneNumber, Address:Address, LicenceNo:LicenceNo});

}


module.exports={insertUser};