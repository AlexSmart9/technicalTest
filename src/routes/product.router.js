const { getAllProduct, createProduct, getOneProduct, removeProduct, updateProduct } = require('../controllers/product.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');
const updateCategory = require('../middlewares/updateCategory.middleware');
const updateQuantity = require('../middlewares/updateQuantity.middlewares');

const productRouter = express.Router();

productRouter.route('/')
    .get(getAllProduct)
    .post(verifyJWT,createProduct,updateCategory, updateQuantity);

productRouter.route('/:id')
    .get(getOneProduct)
    .delete(verifyJWT,removeProduct)
    .put(verifyJWT,updateProduct);

module.exports = productRouter;