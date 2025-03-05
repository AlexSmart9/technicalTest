const { user } = require('../models')

const createUserServices = async (body) => {
    return await user.create(body)
}

const getAllUserServices = async () => {
    return await user.findAll()
}

const getOneUserServices = async (id) => {
    return await user.findByPk(id)
}

const updateUserServices = async (id, body) => {
    return await user.update(
        body,
        {where: {id}, returning: true}
    )
}

const removeUserServices = async (id) => {
    return await user.destroy({where: {id}})
}

const loginServices = async(email) => {
    return await user.findOne({where: {email}})
}

module.exports = {
    createUserServices,
    getAllUserServices,
    getOneUserServices,
    updateUserServices,
    removeUserServices,
    loginServices
}