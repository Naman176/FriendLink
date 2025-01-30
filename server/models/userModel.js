const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    profilePicture: {
        type: String,
        default: "https://res.cloudinary.com/dm6dtkgtu/image/upload/b_rgb:FFFFFF/c_crop,w_600,h_600/v1738147510/blank_profile_pic_lttwrz.avif",
    },
    publicCloudinaryId: {
        type: String,
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    threads: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    }],
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
    reposts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    }],
}, {
    timestamps: true,
})

const User = mongoose.model("User", userSchema)
module.exports = User
