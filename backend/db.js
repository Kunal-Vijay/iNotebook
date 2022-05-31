const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost:27017/iNotebook";

const connectToMongo = ()=>{
    mongoose.connect(mongoUrl,()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;