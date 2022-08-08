const express = require("express")
const router = express.Router()
const path = require("path")


router.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/menu.html"))
})


module.exports = router