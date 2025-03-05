
const express = require('express');
const { getAllCategory, createCategory, getOneCategory, removeCategory, updateCategory } = require('../controllers/category.controllers');
const verifyJWT = require('../utils/verifyJWT');

const categoryRouter = express.Router();

categoryRouter.route('/')
    .get(getAllCategory)
    .post(verifyJWT,createCategory);

categoryRouter.route('/:id')
    .get(getOneCategory)
    .delete(verifyJWT,removeCategory)
    .put(verifyJWT,updateCategory);

module.exports = categoryRouter;