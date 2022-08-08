const User = require("../database/User.js")

const getAllUsers = () => {
    const allUsers = User.getAllUsers()
    return allUsers
}

const getOneUser = (id) => {
    const oneUser = User.getOneUser(id)
    return oneUser
}

const createNewUser = (newUser) => {
    const createdUser = User.createNewUser(newUser)
    return createdUser
}

const updateUser = (id, newUser) => {
    const updatedUser = User.updateUser(id, newUser)
    return updatedUser
}


const deleteUser = (id) => {
    const deletedUser = User.deleteUser(id)
    return deletedUser
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser
}