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
        select: false,
    },
    bio: {
        type: String,
    },
    profilePicture: {
        type: String,
        default: "blank-profile-picture-973460_1280.png",
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
