const express = require("express")
const router = express.Router()
const path = require("path")

router.get('/update', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Users/updateUser.html"))
})

router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Users/createUser.html"))
})

router.get('/getAll', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Users/getAllUsers.html"))
})

router.get('/getOne', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Users/getUser.html"))
})

router.get('/delete', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/Users/userDelete.html"))
})


module.exports = router