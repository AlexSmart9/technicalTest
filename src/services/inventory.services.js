const { inventory } = require('../models')

const createInventoryServices = async (body) => {
    return await inventory.create(body)
}

const getInventoryServices = async (id) => {
    return await inventory.findByPk(id)
}

const getAllInventoryServices = async() => {
    return await inventory.findAll()
}

module.exports = {
    createInventoryServices,
    getInventoryServices,
    getAllInventoryServices
}