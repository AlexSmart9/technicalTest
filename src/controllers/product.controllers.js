const { createProductServices, getAllProductServices, getOneProductServices, updateProductServices, removeProductServices } = require('../services/product.services')
const catchError = require('../utils/catchError')

const createProduct = catchError(async(req, res, next) => {
    const result = await createProductServices(req.body)
    req.result = result
    req.product = result
    next()
})

const getAllProduct = catchError(async(req,res) => {
    const result = await getAllProductServices()
    return res.status(200).json(result) 
})

const getOneProduct = catchError(async(req,res) => {
    const {id} = req.params
    const result = await getOneProductServices(id)
    return res.status(200).json(result)
})

const updateProduct = catchError(async(req, res) => {
    const {id} = req.params
    const result = await updateProductServices(id, req.body)
    if(result[0] === 0) return res.sendStatus(404)
    return res.status(203).json(result[1][0])
})

const removeProduct = catchError(async(req,res) => {
    const {id} = req.params
    const result = await removeProductServices(id)
    if(!result) return res.sendStatus(404)
    return res.sendStatus(204)
})

module.exports = {
    createProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    removeProduct
}