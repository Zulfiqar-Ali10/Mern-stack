const mongoose = require("mongoose");

// const uri = "mongodb+srv://zulfiqardev01:s1Myz54QKisP2QGR@zulfiqarapi.mat8z.mongodb.net/zulfiqardev01?retryWrites=true&w=majority&appName=ZulfiqarApi";

const connectDB = (uri) => {
    // console.log("connect db");
    return mongoose.connect(uri);
    
    console.log("connected");
    // No need for useNewUrlParser or useUnifiedTopology
};
 
module.exports = connectDB;
