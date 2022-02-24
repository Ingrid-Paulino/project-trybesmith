import express from 'express';
import controllerLogin from '../controllers/userController';
import validation from '../middlewares/validations';
// import validateJWT from '../middlewares/auth/validateJWT';

const loginRoute = express.Router({ mergeParams: true });

// userRoute.use(validateJWT);

loginRoute.post(
  '/', 
  controllerLogin.create,
);

export default loginRoute;