const mongoose = require("mongoose")

const accDetMongoose = require("mongoose") 

// Format data to DB
const AccntSchema = new mongoose.Schema({
    gamerID: String,
    password: String
})

const AccntMdl = mongoose.model("AccDet", AccntSchema) 
module.exports = AccntMdl