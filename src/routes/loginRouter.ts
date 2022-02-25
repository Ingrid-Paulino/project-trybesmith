import express from 'express';
import controllerLogin from '../controllers/loginController';
import validation from '../middlewares/validations';

const loginRoute = express.Router({ mergeParams: true });

loginRoute.post('/', validation.verifyUsername, validation.verifypassword, controllerLogin.login);

export default loginRoute;