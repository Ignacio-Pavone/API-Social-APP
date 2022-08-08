const category = require ("../database/Category.js")

const getCategories = () => {
    const allCategories = category.getCategories()
    return allCategories
}

const getOneCategory = (id) => {
    const oneCategory = category.getOneCategory(id)
    return oneCategory
}

const createNewCategory= (newCategory) => {
    const createdCategory = category.createNewCategory(newCategory)
    return createdCategory
}

const updateCategory = (id, newCategory) => {
    const updatedCategory = category.updateCategory(id, newCategory)
    return updatedCategory
}


const deleteCategory = (id) => {
    const deletedCategory = category.deleteCategory(id)
    return deletedCategory
}

module.exports = {
    getCategories,
    getOneCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
}