const mongoose = require('mongoose');

const connectDB = async () => {
    // await mongoose.connect(process.env.MONGO_URI)
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("DB URL is not provided");
        }
        console.log('Establishing connection with database...');
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected...")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB