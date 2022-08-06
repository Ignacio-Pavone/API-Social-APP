const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

// VARIABLES
const PORT = process.env.PORT || 3000
const v1UsersRoute = require('./v1/routes/users.js')
const v1CategoriesRoute = require('./v1/routes/categories.js')
const v1PostsRoute = require('./v1/routes/posts.js')

// MIDDLEWARES
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// ROUTES
app.use('/api/v1/users', v1UsersRoute)
app.use('/api/v1/categories', v1CategoriesRoute)
app.use('/api/v1/posts', v1PostsRoute)

// LISTEN 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})