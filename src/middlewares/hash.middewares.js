const bcrypt = require('bcrypt')
const catchError = require('../utils/catchError')

const hash = catchError(async(req, res, next) => {
    if(!req.body.password) return res.sendStatus(400)
    const {password} = req.body
    const hashPassword = await bcrypt.hash(password, 10)

    req.passwordHash = hashPassword

    next()
})

module.exports = hash