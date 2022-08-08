const express = require("express")
const router = express.Router()
const path = require("path")

router.get('/update', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Categories/updateCategory.html"))
})

router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Categories/createCategory.html"))
})

router.get('/getAll', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Categories/getAllCategories.html"))
})

router.get('/getOne', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Categories/getOneCategory.html"))
})

router.get('/delete', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Categories/deleteCategory.html"))
})


module.exports = router