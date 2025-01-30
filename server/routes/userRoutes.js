const express = require('express');
const { registerUser, loginUser, getUserProfile, followUser, updateProfile, searchUser, logoutUser, myInfo } = require('../controllers.js/userController');
const auth = require('../middleware/auth')
const userRouter = express.Router()

userRouter.post("/register", registerUser) // register new user
userRouter.post("/login", loginUser) // login user
userRouter.post("/logout", auth, logoutUser) // logout user
userRouter.get("/me", auth, myInfo) // profile for current user
userRouter.get("/:id", auth, getUserProfile)  // view any profile
userRouter.put("/follow/:id", auth, followUser) // follow/unfollow user
userRouter.put("/update", auth, updateProfile) // update user profile
userRouter.get("/search/:query", auth, searchUser) // search users

module.exports = userRouter