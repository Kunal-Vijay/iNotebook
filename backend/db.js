const mongoose = require('mongoose');
const mongoUrl = "mongodb+srv://kunal:anything@cluster0.srzpb.mongodb.net/?retryWrites=true";

const connectToMongo = ()=>{
    mongoose.connect(mongoUrl,()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;