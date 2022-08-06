const categoryService = require("../services/categoryService")

const getAllCategories = async (req, res) => {
    const allCategories = await categoryService.getCategories()
    res.status(200).json(allCategories)
}

const getOneCategory = async (req, res) => {
    const { id } = req.params
    const oneCategory = await categoryService.getOneCategory(id)
    res.status(200).json(oneCategory)
}

const createdCategory = async (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({
            status: "error",
            err: "You must fill all the fields",
            reason: "Field: name is empty"
        })
    }

    const newCategory = {
        name: name
    }

    const createCategory = await categoryService.createNewCategory(newCategory)
    res.status(201).json(createCategory)
}

const updateCategory = async (req, res) => {
    const { id } = req.params
    const { name } = req.body
    if (!name) {
        res.status(400).json({
            status: "error",
            err: "You must fill at least one field",
            reason: "Field: name, is empty"
        })
    }
    const newCategory = {
        name: name
    }

    const updatedCategory = await categoryService.updateCategory(id, newCategory)
    res.status(200).json(updatedCategory)
}

const deleteCategory = async (req, res) => {
    const { id } = req.params
    deletedCategory = await categoryService.deleteCategory(id)
    res.status(200).json({ msg: "Categoria eliminada!" })
}

module.exports = {
    getAllCategories,
    getOneCategory,
    createdCategory,
    updateCategory,
    deleteCategory
}