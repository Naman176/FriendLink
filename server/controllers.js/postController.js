const { response_500, response_201, response_400, response_200, response_404, response_401 } = require("../utils/responseCodes")
const User = require("../models/userModel")
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")
const formidable = require('formidable');
const cloudinary = require('../config/cloudinary');

exports.addPost = async (req, res) => {
    try {
        const form = formidable({})
        form.parse(req, async (error, fields, files) => {
            if (error) {
                return response_400(res, "Error in formidable")
            }
            if (!fields.text && !files.media) {
                return response_400(res, "Nothing to post")
            }
            const post = new Post()
            if (fields.text) {
                post.text = fields.text
            }
            if (files.media) {
                const postImage = await cloudinary.uploader.upload(files.media.filepath, {
                    folder: "FriendLink/Posts"
                })
                if (!postImage) {
                    return response_400(res, "Unable to upload post image")
                }
                post.media = postImage.secure_url
                post.postPublicCloudinaryId = postImage.public_id
            }
            post.admin = req.user._id
            const newPost = await post.save()
            await User.findByIdAndUpdate(req.user._id, { $push: { threads: newPost._id } }, { new: true })
            return response_201(res, "Post Created", newPost)
        })
    } catch (error) {
        return response_500(res, "Unable to add post", error.message)
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        const { page } = req.query
        let pageNumber = page
        if (!pageNumber || pageNumber == undefined) {
            pageNumber = 1
        }
        const posts = await Post.find({}).sort({ createdAt: -1 }).skip((pageNumber - 1) * 3).limit(3)
            .populate({ path: "admin", select: "-password" })
            .populate({ path: "likes", select: "-password" })
            .populate({
                path: "comments",
                populate: {
                    path: "admin",
                    model: "User",
                    select: "-password",
                }
            })
        return response_200(res, "Posts Fetched", posts)
    } catch (error) {
        return response_500(res, "Unable to get all posts", error.message)
    }
}

exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params // id = post id to be deleted
        if (!id) {
            return response_400(res, "Select post to delete")
        }
        let post = await Post.findById(id)
        if (!post) {
            return response_404(res, "Post not found")
        }
        const userId = req.user._id.toString()
        const adminId = post.admin._id.toString()
        if (userId !== adminId) {
            return response_401(res, "You are not authorized to delete this post")
        }
        if (post.media) {
            await cloudinary.uploader.destroy({ public_id: id.postPublicCloudinaryId }, (error, result) => {
                console.log({ error, result });
            })
        }
        await Comment.deleteMany({ _id: { $in: post.comments } })
        await User.updateMany({ $or: [{ threads: id }, { reposts: id }, { replies: id }] },
            { $pull: { threads: id, reposts: id, replies: id } },
            { new: true })
        post = await Post.findByIdAndDelete(id);
        return response_200(res, "Post deleted successfully", post)
    } catch (error) {
        return response_500(res, "Unable to delete post", error.message)
    }
}

exports.likePost = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return response_400(res, "Select post to like")
        }
        let post = await Post.findById(id)
        if (!post) {
            return response_404(res, "Post not found")
        }
        if (post.likes.includes(req.user._id)) {
            post = await Post.findByIdAndUpdate(id, { $pull: { likes: req.user._id } }, { new: true })
            return response_201(res, "Post unliked", post)
        }
        post = await Post.findByIdAndUpdate(id, { $push: { likes: req.user._id } }, { new: true })
        return response_201(res, "Post liked", post)
    } catch (error) {
        return response_500(res, "Unable to like post", error.message)
    }
}

exports.repostPost = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return response_400("Select post to repost")
        }
        const post = await Post.findById(id)
        if (!post) {
            return response_404(res, "Post not found")
        }
        if(req.user.threads.includes(post._id)){
            return response_400(res, "You cannot repost the post you posted")
        }
        if(req.user.reposts.includes(post._id)){
            return response_400(res, "This post is already reposted")
        }
        const user = await User.findByIdAndUpdate(req.user._id, {$push: {reposts: post._id}}, {new: true})
        return response_201(res, "Post reposted", user.reposts) 
    } catch (error) {
        return response_500(res, "Unable to repost", error.message)
    }
}

exports.getSinglePost = async (req, res) => {
    try {
        const {id} = req.params
        if(!id){
            return response_400("Select the post you want to see")
        }
        const post = await Post.findById(id)
        .populate({path: "admin", select: "-password"})
        .populate({path: "likes", select: "-password"})
        .populate({path: "comments", populate: {path: "admin", select: "-password"}})
        return response_200(res, "Post fetched", post)
    } catch (error) {
        return response_500(res, "Unable to get post", error.message)
    }
}