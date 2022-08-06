const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


const getCategories = async () =>{
    const allCategories = await prisma.category.findMany()
    return allCategories
} 

const getOneCategory = async (id) =>{
    const oneCategory = await prisma.category.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return oneCategory
}

const createNewCategory = async (newCategory) => {
    const createdCategory = await prisma.category.create({
        data: newCategory
    })
    return createdCategory
}

const updateCategory = async (id, newCategory) => {
    const updatedCategory = await prisma.category.update({
        where: {
            id: Number.parseInt(id)
        },
        data: newCategory
    })
    return updatedCategory
}

const deleteCategory = async (id) => {
    const deletedCategory = await prisma.category.delete({
        where: {
            id: Number.parseInt(id)
        }
    })
    return deletedCategory
}

module.exports = {
    getCategories,
    getOneCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
}