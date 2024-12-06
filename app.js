require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors')
const connectDB = require("./db/connect")

const corsOption = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    CredentialS: true,
    optionSuccessStatus: 204
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.use("/", products_routes);


const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        
        app.listen(PORT, () => {
           console.log(`${PORT} Yes I am connecting`);
           
        });
    }catch(error){
        console.log(error);
        
    }
} 

start();  