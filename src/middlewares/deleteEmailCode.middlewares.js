const { findUserEmailCodeServices } = require('../services/emailCode.services');
const catchError = require("../utils/catchError");

const deleteEmailCode = catchError(async(req, res, next) => {
    const {id} = req.params
    const result = await findUserEmailCodeServices(id)
    console.log(result)
    if (result) {
        await result.destroy()
    }
    next()
})

module.exports = deleteEmailCode