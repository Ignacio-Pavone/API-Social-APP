const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getAllUsers = async () => {
    const allUsers = await prisma.user.findMany()
    return allUsers
}

const getOneUser = async (id) =>{
    const oneUser = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return oneUser
}

const createNewUser = async (newUser) => {
    const createdUser = await prisma.user.create({
        data: newUser
    })
    return createdUser
}

const updateUser = async (id, newUser) => {
    const updatedUser = await prisma.user.update({
        where: {
            id: Number.parseInt(id)
        },
        data: newUser
    })
    return updatedUser
}

const deleteUser = async (id) => {
    const deletedUser = await prisma.user.delete({
        where: {
            id: Number.parseInt(id)
        }
    })
    return deletedUser
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser
}