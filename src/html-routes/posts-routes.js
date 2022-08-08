const express = require("express")
const router = express.Router()
const path = require("path")

router.get('/update', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Posts/updatePost.html"))
})

router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Posts/createPost.html"))
})

router.get('/getAll', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Posts/getAllPosts.html"))
})

router.get('/getOne', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Posts/getOnePost.html"))
})

router.get('/delete', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Posts/deletePost.html"))
})


module.exports = router