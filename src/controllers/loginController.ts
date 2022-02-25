import { Request, Response, NextFunction } from 'express';
import { ILogin, Login } from '../interfaces/interfaces';

import { StatusCodes } from '../enum/enumStatusCodes';
import loginService from '../services/loginService';
import createToken from '../services/createToken';
import { Validation } from '../types/typeValidation';

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: ILogin = req.body;
  try {
    const newLogin: Login | Validation = await loginService.login({ username, password });

    if ('status' in newLogin) return next(newLogin);
    // ou
    // if (newLogin.status) return next(newLogin);
    
    const { id } = newLogin as Login;
    const token = createToken({ id, username });
    
    return res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    next(error);
  }
};

export default {
  login,
};