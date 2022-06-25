const mongoose = require('mongoose');
require('dotenv').config();
const mongoUrl = process.env.Mongo_URL

const connectToMongo = ()=>{
    mongoose.connect(mongoUrl,()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;