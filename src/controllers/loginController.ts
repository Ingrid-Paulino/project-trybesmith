import { Request, Response, NextFunction } from 'express';
import { ILogin, Login } from '../interfaces/loginInterface';

import { StatusCodes } from '../enum/enumStatusCodes';
import loginService from '../services/loginService';
import createToken from '../services/createToken';
import { Validation } from '../types/typeValidation';

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: ILogin = req.body;
  console.log('oi1');
  
  try {
    const newLogin: Login | Validation = await loginService.login({ username, password });
    console.log({ newLogin });

    if ('status' in newLogin) return next(newLogin);
    
    const { id } = newLogin as Login;
    const token = createToken({ id, username });
    console.log({ token });
    
    return res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    console.log({ error }); 
    next(error);
  }
};

export default {
  login,
};