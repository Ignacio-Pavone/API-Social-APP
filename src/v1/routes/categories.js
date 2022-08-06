const express = require ("express")
const router = express.Router()

const categoriesController = require("../../controllers/categoriesController")

router
    .get("/", categoriesController.getAllCategories)
    .get("/:id", categoriesController.getOneCategory)
    .post("/", categoriesController.createdCategory)
    .put("/:id", categoriesController.updateCategory)
    .delete("/:id", categoriesController.deleteCategory)

module.exports = router