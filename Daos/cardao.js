const {getCollection}= require("./connection");

function insertCar(model, fuelType, seaterType ){
    const collection=getCollection( "car_model");
    collection.insertOne({model:model, fuelType:fuelType, seaterType:seaterType})

}


function carModel(id){
    const collection=getCollection("car_models");//creating collection name for an particular database
    return collection.find({_id:id}).toArray();// returning an collection into an array with id 

}



module.exports={carModel, insertCar};