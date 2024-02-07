const{getCollection}= require('./connection');

function insert(customer_id, car_id, year, subscription ){
    const collection =getCollection("SubscriptionDetails");
    collection.insertOne({customer_id:customer_id, car_id:car_id, year:year, subscription:{
        Tenure:subscription.Tenure, startDate:subscription.startDate, endDate:subscription.endDate, 
         
    }})


}


