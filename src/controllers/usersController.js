const userService = require("../services/userService.js")

const getAllUsers = async (req, res) => {
    const allUsers = await userService.getAllUsers()
    res.status(200).json(allUsers)
}

const getOneUser = async (req, res) => {
    const { id } = req.params
    const oneUser = await userService.getOneUser(id)
    console.log(oneUser)
    res.status(200).json(oneUser)
}

const createNewUser = async (req, res) => {
    const { name, age, email, country } = req.body
    if (!name || !email || !age || !country) {
        res.status(400).json({
            status: "error",
            err: "You must fill all the fields",
            reason: "Fields: name, email, age, or country are empty"
        })
    }

    const newUser = {
        name: name,
        age: Number.parseInt(age),
        email: email,
        country: country
    }
    const createdUser = await userService.createNewUser(newUser)
    res.status(201).json({ msg: "Usuario creado correctamente!", data: createdUser })
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const { name, age, email, country } = req.body
    console.log(req.body)
    console.log(id)
    if (!name && !age && !email && !country) {
        res.status(400).json({
            status: "error",
            err: "You must fill at least one field",
            reason: "Fields: name, email, age, and country are empty"
        })
    }
    const newUser = {
        name: name,
        age: Number.parseInt(age),
        email: email,
        country: country
    }
    const updatedUser = await userService.updateUser(id, newUser)
    res.status(200).json({ msg: "Usuario actualizado!", data: updatedUser })
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const deletedUser = await userService.deleteUser(id)
    res.status(200).json({ msg: "Usuario eliminado!", data: deletedUser })
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser
}