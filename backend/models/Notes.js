import mongoose from "mongoose";
const { Schema } = mongoose;

const notesSchema = new Schema({
    name : {type:String,required:true},
    description : {type:String,required:true},
    tag : {type:String,required:true},
    date : {type:Date,default:Date.now},
});

module.exports = mongoose.model('notes',notesSchema);