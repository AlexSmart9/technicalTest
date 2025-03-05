const express = require('express')
const { getInventory } = require('../controllers/inventory.controllers')

const inventoryRouter = express.Router()

inventoryRouter.route('/')
    .get(getInventory)

module.exports = inventoryRouter