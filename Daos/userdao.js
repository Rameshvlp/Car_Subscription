const {getCollection}= require('./connection');

function insertUser(UserName, Age, PhoneNumber, Address, LicenceNo){
    
    const collection =getCollection("CustomerDetails");
    collection.insertOne({Name:UserName, Age:Number(Age), PhoneNumber:Number(PhoneNumber), Address:Address, LicenceNo:Number(LicenceNo)});

}


module.exports={insertUser}; 