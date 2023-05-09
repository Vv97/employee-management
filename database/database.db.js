require("dotenv").config();
const mongoose = require("mongoose");

// connecting database with server
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.mongoDbUrl);
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
};


module.exports = connectDb;