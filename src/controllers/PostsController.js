const postService = require("../services/PostService.js")

const getAllPosts = async (req, res) => {
    const getAllPosts = await postService.getPosts()
    res.status(200).json(getAllPosts)
}

const getOnepost = async (req, res) => {
    const { id } = req.params
    const onePost = await postService.getOnePost(id)
    res.status(200).json(onePost)
}

const createdPost = async (req, res) => {
    const { title, content, createdAt, published, authorId, categories } = req.body
    if (!title, !content, !createdAt, !published, !authorId, !categories) {
        res.status(400).json({
            status: "error",
            err: "You must fill all the fields",
            reason: "Empty Fields"
        })
    }

    const newPost = {
        title: title,
        content: content,
        createdAt: createdAt,
        published: published,
        authorId: authorId,
        categories: categories
    }
    console.log(newPost)

    const createPost = await postService.createNewPost(newPost)
    //res.status(201).json(createPost)
}

const updatePost = async (req, res) => {
    const { id } = req.params
    const { title, content, createdAt, published, authorID } = req.body
    if (!title, !content, !createdAt, !published, !authorID) {
        res.status(400).json({
            status: "error",
            err: "You must fill all the fields",
            reason: "Empty Fields"
        })
    }

    const newPost = {
        title: title,
        content: content,
        createdAt: createdAt,
        published: published,
        authorId: authorID
    }

    const updatePost = await postService.updatePost(id, newPost)
    //res.status(201).json(updatePost)
}

const deletePost = async (req, res) => {
    const { id } = req.params
    await postService.deletePost(id)
    res.status(200).json({ msg: "Post eliminada!" })
}

module.exports = {
    getAllPosts,
    getOnepost,
    createdPost,
    updatePost,
    deletePost
}