const { createCategoryServices, getAllCategoryServices, updateCategoryServices, removeCategoryServices, getOneCategoryServices } = require('../services/category.services')
const catchError = require('../utils/catchError')

const createCategory = catchError(async(req, res) => {
    const result = await createCategoryServices(req.body)
    return res.status(201).json(result)
})

const getAllCategory = catchError(async(req, res) => {
    const result = await getAllCategoryServices()
    return res.status(200).json(result)
})

const getOneCategory = catchError(async(req, res) => {
    const {id} = req.params
    const result = await getOneCategoryServices(id)
    return res.status(200).json(result)
})

const updateCategory = catchError(async(req, res) => {
    const {id} = req.params
    const result = await updateCategoryServices(id, req.body)
    if(result[0] === 0) return res.sendStatus(404)
    return res.status(203).json(result[1][0])
})

const removeCategory = catchError(async(req, res) => {
    const {id} = req.params
    const result = await removeCategoryServices(id)
    if(!result) return res.sendStatus(404)
    return res.sendStatus(204)
})

module.exports = {
    createCategory,
    getAllCategory,
    getOneCategory,
    updateCategory,
    removeCategory
}