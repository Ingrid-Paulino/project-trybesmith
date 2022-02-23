import express from 'express';
import controllerUser from '../controllers/userController';
import userValidate from '../middlewares/validations';

const userRoute = express.Router({ mergeParams: true });

userRoute.post('/', userValidate, controllerUser.create);

export default userRoute;