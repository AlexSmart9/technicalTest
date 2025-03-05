const express = require('express')
const userRouter = require('./user.router')
const categoryRouter = require('./category.router')
const productRouter = require('./product.router')
const inventoryRouter = require('./inventory.router')

const router = express.Router()

//Routes
router.use('/users', userRouter)
router.use('/categories',categoryRouter)
router.use('/products', productRouter)
router.use('/inventories', inventoryRouter)

module.exports = router