const {getCollection}= require("./connection");

function insertCar(model, fuelType, seaterType ){
    const collection=getCollection( "car_model");
    collection.insertOne({model:model, fuelType:fuelType, seaterType:seaterType})

}



async function RetriveCar()
{
    const collection=  getCollection("car_model");//creating collection name for an particular database
    return  await collection.find({}).toArray();// returning an collection into an array with id 

}



module.exports={RetriveCar, insertCar};