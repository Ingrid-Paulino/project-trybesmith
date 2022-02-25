import express from 'express';
import controllerLogin from '../controllers/loginController';
import validation from '../middlewares/validations';
// import validateJWT from '../middlewares/auth/validateJWT';

const loginRoute = express.Router({ mergeParams: true });

// userRoute.use(validateJWT);

loginRoute.post('/', validation.verifyUsername, validation.verifypassword, controllerLogin.login);

export default loginRoute;