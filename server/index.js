const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/DB');
const userRouter = require('./routes/userRoutes');

// Load environment variables from .env
dotenv.config()

// Import and Connect to DB
connectDB()

// Initialise an Express Server
const app = express()

app.use(express.json());

// Routes for different models
app.use("/api/user", userRouter)

app.get("/api", (req, res) => {
    res.send("routes set up done...")
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is connected on PORT : ${port}`);
})