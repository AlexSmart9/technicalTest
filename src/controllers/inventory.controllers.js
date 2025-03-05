const {createInventoryServices, getAllInventoryServices} = require('../services/inventory.services')
const catchError = require('../utils/catchError')

const createInventory = catchError(async(req, res) => {
    const result = await createInventoryServices(req.body)
    return res.status(200).json(result)
})

const getInventory = catchError(async(req, res) => {
    const result = await getAllInventoryServices()
    return res.status(200).json(result)
})

module.exports = {
    createInventory,
    getInventory
}