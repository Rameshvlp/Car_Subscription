const {getCollection}= require('./connection');

function insertUser(Name, age, phoneNumber, address, licenceNo){
    const collection =getCollection("CustomerDetails");
    collection.insertOne({Name:Name, Age:age, phoneNumber:phoneNumber, address:address, licenceNo:licenceNo});

}

module.exports={insertUser};