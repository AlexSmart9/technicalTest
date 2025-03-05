const {emailCode} = require('../models')

const createEmailCodeServices = async (body) => {
    return await emailCode.create(body)
}

const findEmailCodeServices = async (code) => {
    return await emailCode.findOne({where:{code}})
}

const findUserEmailCodeServices = async(id) => {
    return emailCode.findOne({where: {userId:id}})
}

module.exports = {
    createEmailCodeServices,
    findEmailCodeServices,
    findUserEmailCodeServices
}