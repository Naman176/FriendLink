const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/DB');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const commentRouter = require('./routes/commentRoutes');

// Load environment variables from .env
dotenv.config()

// Import and Connect to DB
connectDB()

// Initialise an Express Server
const app = express()

// Adding necessary middlewares
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

// Routes for different models
app.use("/api/user", userRouter)
app.use("/api/post", postRouter)
app.use("/api/comment", commentRouter)

app.get("", (req, res) => {
    res.send("routes set up done...")
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is connected on PORT : ${port}`);
})