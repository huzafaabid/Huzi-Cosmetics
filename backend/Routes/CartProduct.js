import express from 'express'
import { AddNewCartProduct } from '../Controllers/CartProduct.js';
const router = express.Router();

router.post('/', AddNewCartProduct);

export default router;
