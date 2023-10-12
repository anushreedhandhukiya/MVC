const { config } = require("dotenv")
const mongoose = require("mongoose")
require("dotenv").config()
console.log("ENV",process.env.DB_URL);
const connection=async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log("connected");
}
module.exports=connection