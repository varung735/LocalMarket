const express = require('express');
import sellerController from './seller.controller';

export const sellerRouter = express.Router();
sellerRouter.route('/addSeller').post(sellerController.addSeller);
sellerRouter.route('/seeSellers').get(sellerController.findSellers);
sellerRouter.route('/deleteSeller/:id').delete(sellerController.deleteSeller);
sellerRouter.route('/updateSeller/:id').put(sellerController.updateSeller);