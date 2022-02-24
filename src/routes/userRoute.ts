import express from 'express';
import controllerUser from '../controllers/userController';
import validation from '../middlewares/validations';
// import validateJWT from '../middlewares/auth/validateJWT';

const userRoute = express.Router({ mergeParams: true });

// userRoute.use(validateJWT);

userRoute.post(
  '/', 
  validation.verifyUsername,
  validation.verifyclasse,
  validation.verifylevel,
  validation.verifypassword,
  controllerUser.create,
);

export default userRoute;