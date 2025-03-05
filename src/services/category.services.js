const {category} = require('../models')

const createCategoryServices = async (body) => {
    return await category.create(body)
}

const getAllCategoryServices = async () => {
    return await category.findAll()
}

const getOneCategoryServices = async (id) => {
    return await category.findByPk(id)
}

const updateCategoryServices = async (id, body) => {
    return await category.update(
        body,
        {where: {id}, returning: true}
    )
}

const removeCategoryServices = async (id) => {
    return await category.destroy({where: {id}})
}

const findCategoryServices = async (categoryName) => {
    return await category.findOne({where:{categoryName}})
}

module.exports = {
    createCategoryServices,
    getAllCategoryServices,
    getOneCategoryServices,
    updateCategoryServices,
    removeCategoryServices,
    findCategoryServices
}