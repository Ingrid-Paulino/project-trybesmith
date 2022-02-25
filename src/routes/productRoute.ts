import express from 'express';
import productController from '../controllers/productController';
import validation from '../middlewares/validations';
import validateJWT from '../middlewares/auth/validateJWT';

const productRoute = express.Router({ mergeParams: true });

productRoute.use(validateJWT);
productRoute.post(
  '/',
  validation.verifynameproduct,
  validation.verifyamountproduct,
  productController.create,
);

export default productRoute;