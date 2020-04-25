const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017";
var dbo;
var db;

MongoClient.connect(url,(error,result)=>{
    if(error)
        throw error;
    dbo = result;
    db = dbo.db('TheHotel');
    console.log("Established connection to mongodb database Registration");
    // let user = 'praveen@gmail.com'
    // fetchRegistration(user);
})

function registration(user,callback){
    db.collection('register').insertOne(user,(error,result)=>{
        if(error)
            throw error;
        callback(result);
    })
}

function fetchRegistration(email,callback){
    db.collection('register').findOne({Email : email},(error,result)=>{
        callback(result);
    })
}

function addbooking(details,callback){
    db.collection('bookings').insertOne(details,(error,result) => {
        if(error)
           throw error;
        callback(result);
    })
}

module.exports.registration = registration;
module.exports.fetchRegistration = fetchRegistration;
module.exports.addbooking = addbooking;
