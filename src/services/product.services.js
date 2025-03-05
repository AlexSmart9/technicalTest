const { product } = require('../models')

const createProductServices = async (body) => {
    return await product.create(body)
}

const getAllProductServices = async () => {
    return await product.findAll()
}

const getOneProductServices = async (id) => {
    return await product.findByPk(id)
}

const updateProductServices = async (id, body) => {
    return await product.update(
        body,
        {where: {id}, returning: true}
    )
}

const removeProductServices = async (id) => {
    return await product.destroy({where: {id}})
}

module.exports = {
    createProductServices,
    getAllProductServices,
    getOneProductServices,
    updateProductServices,
    removeProductServices
}