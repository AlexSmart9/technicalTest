const { findEmailCodeServices } = require('../services/emailCode.services')
const { createUserServices, getAllUserServices, getOneUserServices, updateUserServices, removeUserServices } = require('../services/user.services')
const catchError = require('../utils/catchError')
const {emailCode} = require('../models')

const createUser = catchError(async (req, res, next) => {
    const result = await createUserServices({...req.body, password: req.passwordHash})
    req.result = result
    next()

})

const getAllUser = catchError(async (req, res) => {
    const result = await getAllUserServices()
    return res.status(200).json(result)
})

const getOneUser = catchError(async (req, res) => {
    const {id} = req.params
    const result = await getOneUserServices(id)
    return res.status(200).json(result)
})

const updateUser = catchError(async (req, res) => {
    const {id} = req.params
    const result = await updateUserServices(id, req.body)
    if(result[0] === 0) return res.sendStatus(404)
    return res.status(203).json(result[1][0])
})

const removeUser = catchError(async (req, res ) => {
    const {id} = req.params
    const result = await removeUserServices(id)
    await emailCode.destroy({where:{userId:id}})
    if(!result) return res.sendStatus(404)
    return res.sendStatus(204)
})

const login = catchError(async (req, res) => {
    const user = req.userLogged
    const token = req.token
    return res.json({user, token})
})

const userVerify = catchError(async (req, res) => {
    const {code} = req.params
    const result = await findEmailCodeServices(code)
    const user = await getOneUserServices(result.userId)
    if(!user) return res.sendStatus(404)
    const userUpdate = await user.update({isVerified: true})
    await result.destroy()
    return res.json(userUpdate)
})

module.exports = {
    createUser,
    getAllUser,
    getOneUser,
    updateUser,
    removeUser,
    login,
    userVerify
}