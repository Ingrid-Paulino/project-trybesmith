import express from 'express';
import ordersController from '../controllers/ordersController';
import validation from '../middlewares/validations';
import validateJWT from '../middlewares/auth/validateJWT';

const ordersRoute = express.Router({ mergeParams: true });

ordersRoute.use(validateJWT);

ordersRoute.post('/', validation.verifyproducts, ordersController.create);
ordersRoute.get('/', ordersController.getAll);
ordersRoute.get('/:id', ordersController.getById);

export default ordersRoute;