const {getDb, getCollection}= require("./connection");

function insertCar(model, ){

}

function carModel(id){
    const database=getDb("car_Subscription");//creating database name
    const collection=getCollection(database, "car_models");//creating collection name for an particular database
    return collection.find({_id:id}).toArray();// returning an collection into an array with id 

}


carModel();

module.exports(carModel);