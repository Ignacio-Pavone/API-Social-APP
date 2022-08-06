const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getPosts = async () =>{
    const getPosts = await prisma.post.findMany()
    return getPosts
} 

const getOnePost = async (id) =>{
    const getOnePost = await prisma.post.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return getOnePost
}

const createNewPost = async (newPost) =>{
    const createPost = await prisma.post.create({
        data:newPost
    })
    return createPost
}

const updatePost = async (id, updatePost) => {
    const updatedPosts = await prisma.post.update({
        where: {
            id: Number.parseInt(id)
        },
        data: updatePost
    })
    return updatedPosts
}

const deletePost = async (id) => {
    const deletePost = await prisma.post.delete({
        where: {
            id: Number.parseInt(id)
        }
    })
    return deletePost
}

module.exports = {
    getPosts,
    getOnePost,
    createNewPost,
    updatePost,
    deletePost
}