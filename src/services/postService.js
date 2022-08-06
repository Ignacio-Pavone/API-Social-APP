const post = require ("../database/Post")

const getPosts = () => {
    const getPosts = post.getPosts()
    return getPosts
}

const getOnePost = (id) => {
    const getOnePost = post.getOnePost(id)
    return getOnePost
}

const createNewPost= (newPost) => {
    const createNewPost = post.createNewPost(newPost)
    return createNewPost
}

const updatePost = (id, newPost) => {
    const updatePost = post.updatePost(id, newPost)
    return updatePost
}


const deletePost = (id) => {
    const deletePost = post.deletePost(id)
    return deletePost
}

module.exports = {
    getOnePost,
    getPosts,
    createNewPost,
    updatePost,
    deletePost
}