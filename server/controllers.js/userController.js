const { response_500, response_201, response_400, response_200, response_404 } = require("../utils/responseCodes")
const User = require("../models/userModel")
const bcrypt = require('bcrypt');
const { generateToken } = require("../utils/generateToken");
const formidable = require('formidable');
const cloudinary = require('../config/cloudinary');

exports.registerUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        if (!userName || !email || !password) {
            return response_400(res, "All fields are required")
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return response_400(res, "User already exists")
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({ userName, email, password: hashedPassword })
        const result = await newUser.save()

        const accessToken = generateToken({ userId: result._id })

        res.cookie("token", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
            sameSite: "none",
            secure: true,
            partitioned: true,
        })
        return response_201(res, "User registered Successfully", result)
    } catch (error) {
        return response_500(res, "Unable to register user", error.message)
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return response_400(res, "All fields are required")
        }

        const user = await User.findOne({ email })
        if (!user) {
            return response_400(res, "Please register first")
        }

        const passwordMatched = await bcrypt.compare(password, user.password)
        if (!passwordMatched) {
            return response_400(res, "Invalid Credentials")
        }

        const accessToken = generateToken({ userId: user._id })

        res.cookie("token", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
            sameSite: "none",
            secure: true,
            partitioned: true,
        })
        return response_200(res, "User logged in successfully", user)
    } catch (error) {
        return response_500(res, "Unable to login user", error.message)
    }
}

exports.getUserProfile = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return response_400(res, "User Id is required")
        }

        const user = await User.findById(id)
            .populate({path: "followers", select: "-password"})
            .populate({ path: "threads", populate: [{ path: "likes", select: "-password" }, { path: "comments" }, { path: "admin", select: "-password" }] })
            .populate({ path: "replies", populate: [{ path: "admin", select: "-password" }, { path: "post" }] })
            .populate({ path: "reposts", populate: [{ path: "likes", select: "-password" }, { path: "comments" }, { path: "admin", select: "-password" }] })

        if (!user) {
            return response_404(res, "User not found")
        }

        return response_200(res, "User profile fetched", user)
    } catch (error) {
        return response_500(res, "Unable to get profile", error.message)
    }
}

exports.followUser = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return response_400(res, "User Id is required")
        }

        const userToBeFollowed = await User.findById(id)
        if (!userToBeFollowed) {
            return response_404(res, "User you are looking for does not exist")
        }

        if (id == req.user._id) {
            return response_400(res, "You can't follow or unfollow yourself")
        }

        if (userToBeFollowed.followers.includes(req.user._id)) {
            await User.findByIdAndUpdate(userToBeFollowed._id, { $pull: { followers: req.user._id } }, { new: true })
            return response_201(res, "User Unfollowed", userToBeFollowed)
        }

        await User.findByIdAndUpdate(userToBeFollowed, { $push: { followers: req.user._id } }, { new: true })
        return response_201(res, "user Followed", userToBeFollowed)
    } catch (error) {
        return response_500(res, "Unable to Follow or Unfollow User", error.message)
    }
}

exports.updateProfile = async (req, res) => {
    try {
        let user = await User.findById(req.user._id)
        if (!user) {
            return response_404(res, "User Profile does not exist")
        }

        const form = formidable({})
        form.parse(req, async (error, fields, files) => {
            if (error) {
                return response_400(res, "Error in formidable")
            }
            if (!fields.text && !files.media) {
                return response_400(res, "Nothing to update")
            }
            if (fields.text) {
                user = await User.findByIdAndUpdate(req.user._id, { bio: fields.text }, { new: true })
            }
            if (files.media) {
                if (user.publicCloudinaryId) {
                    await cloudinary.uploader.destroy(user.publicCloudinaryId, (error, result) => {
                        console.log({ error, result });
                    })
                }
                const uploadedImage = await cloudinary.uploader.upload(files.media.filepath, {
                    folder: "FriendLink/Profiles"
                })
                if (!uploadedImage) {
                    return response_400(res, "Unable to update profile picture")
                }
                user = await User.findByIdAndUpdate(req.user._id, {
                    profilePicture: uploadedImage.secure_url,
                    publicCloudinaryId: uploadedImage.public_id
                }, { new: true })
            }
            return response_201(res, "Profile Updated", user)
        })
    } catch (error) {
        return response_500(res, "Unable to update profile", error.message)
    }
}

exports.searchUser = async (req, res) => {
    try {
        const { query } = req.params
        const users = await User.find({
            $or: [
                { userName: { $regex: query, $options: "i" } },
                { email: { $regex: `^${query}`, $options: "i" } },
            ]
        })
        return response_200(res, "Searched", users)
    } catch (error) {
        return response_500(res, "Unable to search user", error.message)
    }
}

exports.logoutUser = async (req, res) => {
    try {
        res.cookie("token", "", {
            maxAge: 0,
            httpOnly: true,
            sameSite: "none",
            secure: true,
            partitioned: true,
        })
        return response_201(res, "User Logged Out", req.user)
    } catch (error) {
        return response_500(res, "Unable to logout", error.message)
    }
}

exports.myInfo = async (req, res) => {
    try {
        return response_200(res, "Info fetched", req.user)
    } catch (error) {
        return response_500(res, "Unable to get info", error.message)
    }
}