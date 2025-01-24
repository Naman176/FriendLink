const express = require('express');
const { addPost, getAllPosts, deletePost, likePost, repostPost, getSinglePost } = require('../controllers.js/postController');
const auth = require('../middleware/auth');
const postRouter = express.Router()

postRouter.route("/").post(auth, addPost).get(auth, getAllPosts)
postRouter.route("/:id").delete(auth, deletePost).get(auth, getSinglePost)
postRouter.route("/like/:id").put(auth, likePost)
postRouter.route("/repost/:id").put(auth, repostPost)

module.exports = postRouter