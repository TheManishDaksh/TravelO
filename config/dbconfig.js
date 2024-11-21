
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async ()=>{
    try{
    await mongoose.connect(process.env.mongo_URL)
}catch(err){
    console.log(err)
}
}

module.exports = connectDB;