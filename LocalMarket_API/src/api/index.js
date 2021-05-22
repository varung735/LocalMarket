import express from 'express';
import { sellerRouter } from './Resources/sellerInfo/seller.router';
import { userRouter } from './Resources/user/user.router';

export const mainRouter = express.Router();
mainRouter.use('/users', userRouter);
mainRouter.use('/seller', sellerRouter);