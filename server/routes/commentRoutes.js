const express = require('express');
const auth = require('../middleware/auth');
const { addComment, deleteCommment } = require('../controllers.js/commentController');
const commentRouter = express.Router()

commentRouter.route("/:id").post(auth, addComment)
commentRouter.route("/:postId/:id").delete(auth, deleteCommment)

module.exports = commentRouter