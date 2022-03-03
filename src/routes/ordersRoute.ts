import express from 'express';
import ordersController from '../controllers/ordersController';
import validation from '../middlewares/validations';
import validateJWT from '../middlewares/auth/validateJWT';

const ordersRoute = express.Router({ mergeParams: true });

ordersRoute.use(validateJWT);

ordersRoute.post('/', validation.verifyproducts, ordersController.create);

export default ordersRoute;