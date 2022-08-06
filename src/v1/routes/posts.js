const express = require ("express")
const router = express.Router()

const postsController = require("../../controllers/postsController")

router
    .get("/", postsController.getAllPosts)
    .get("/:id", postsController.getOnepost)
    .post("/", postsController.createdPost)
    .put("/:id", postsController.updatePost)
    .delete("/:id", postsController.deletePost)

module.exports =router