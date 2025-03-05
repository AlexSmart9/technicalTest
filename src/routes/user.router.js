
const express = require('express');
const { getAllUser, createUser, getOneUser, removeUser, updateUser, login, userVerify } = require('../controllers/user.controllers');
const hash = require('../middlewares/hash.middewares');
const loginMiddlewares = require('../middlewares/login.middlewares');
const sessionJWT = require('../middlewares/sessionJWT.middlewares');
const verifyJWT = require('../utils/verifyJWT');
const sendEmailCode = require('../middlewares/emailCode.middlewares');
const deleteEmailCode = require('../middlewares/deleteEmailCode.middlewares');

const userRouter = express.Router();

userRouter.route('/')
    .get(verifyJWT ,getAllUser)
    .post(hash, createUser, sendEmailCode);

userRouter.route('/login')
    .post(loginMiddlewares, sessionJWT, login)

userRouter.route('/verify/:code')
    .get(userVerify)

userRouter.route('/:id')
    .get(verifyJWT,getOneUser)
    .delete(verifyJWT,deleteEmailCode,removeUser)
    .put(verifyJWT,updateUser);

module.exports = userRouter;