const express = require('express');
import userController from './user.controller';

export const userRouter = express.Router();

userRouter.route('/seeUsers').get(userController.findAllUsers);
userRouter.route('/addUser').post(userController.createUser);
userRouter.route('/deleteUser/:id').delete(userController.deleteUser);
