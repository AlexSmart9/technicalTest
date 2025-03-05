
const getInventoryServices = require('../services/inventory.services')
const catchError = require('../utils/catchError')

const updateQuantity = catchError(async(req,res) => {
    const {quantity} = req.result
    const inventory = await getInventoryServices(1)
    const newTotalProducts = inventory.totalProducts + Number(quantity)
    const newProductEntries = inventory.productEntries + Number(quantity)
    await inventory.update({
        totalProducts:newTotalProducts,
        productEntries:newProductEntries
    })
    return res.status(203).json('The product has been added to the inventory')

})

module.exports = updateQuantity