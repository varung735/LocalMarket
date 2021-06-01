import express from 'express';
import { customerRouter } from './Resources/customerInfo/customer.router';
import { productRouter } from './Resources/products/product.router';
import { sellerRouter } from './Resources/sellerInfo/seller.router';
import { userRouter } from './Resources/user/user.router';

export const mainRouter = express.Router();
mainRouter.use('/users', userRouter);
mainRouter.use('/seller', sellerRouter);
mainRouter.use('/customer', customerRouter);
mainRouter.use('/products', productRouter);