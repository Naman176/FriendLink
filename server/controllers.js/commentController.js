const User = require("../models/userModel")
const Post = require("../models/postModel")
const Comment = require("../models/commentModel")
const { response_500, response_400, response_404, response_201, response_401, response_200 } = require("../utils/responseCodes")
const mongoose = require("mongoose")

exports.addComment = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return response_400(res, "Select post to comment")
        }
        const { text } = req.body
        if (!text) {
            return response_400(res, "No comment to add")
        }
        const post = await Post.findById(id)
        if (!post) {
            return response_404(res, "Post not found to comment")
        }
        const comment = new Comment({
            text,
            admin: req.user._id,
            post: post._id
        })
        const newComment = await comment.save()
        await Post.findByIdAndUpdate(id, { $push: { comments: newComment._id } }, { new: true })
        await User.findByIdAndUpdate(req.user._id, { $push: { replies: newComment._id } }, { new: true })
        return response_201(res, "Comment added", newComment)
    } catch (error) {
        return response_500(res, "Unable to add Comment", error.message)
    }
}

exports.deleteCommment = async (req, res) => {
    try {
        const { postId, id } = req.params
        if (!postId) {
            return response_400(res, "Select post")
        }
        if (!id) {
            return response_400(res, "Select comment to delete")
        }
        let post = await Post.findById(postId)
        if (!post) {
            return response_404(res, "Post not found")
        }
        let comment = await Comment.findById(id)
        if (!comment) {
            return response_404(res, "Comment not found")
        }
        const newId = new mongoose.Types.ObjectId(id)
        if (!post.comments.includes(newId)) {
            return response_400(res, "The post you have selected doesn't contains this comment")
        }
        const userId1 = comment.admin._id.toString()
        const userId2 = req.user._id.toString()
        if (userId1 !== userId2) {
            return response_401(res, "You are not authorized to delete this comment")
        }
        await User.findByIdAndUpdate(req.user._id, { $pull: { replies: id } }, { new: true })
        post = await Post.findByIdAndUpdate(postId, { $pull: { comments: id } }, { new: true })
        comment = await Post.findByIdAndDelete(id)
        return response_200(res, "Comment Deleted", post)
    } catch (error) {
        return response_500(res, "Unable to delete comment", error.message)
    }
}