const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/DB');

const app = express()
dotenv.config()
connectDB()

const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is connected on PORT : ${port}`);
})