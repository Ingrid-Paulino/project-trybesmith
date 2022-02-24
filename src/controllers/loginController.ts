import { Request, Response, NextFunction } from 'express';
import { ILogin, Login } from '../interfaces/loginInterface';

import { StatusCodes } from '../enum/enumStatusCodes';
import loginService from '../services/loginService';
import createToken from '../services/createToken';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: ILogin = req.body;
  
  try {
    const newLogin: Login = await loginService.create({ username, password });
    console.log({ newLogin });
    
    const { id } = newLogin;
    const token = createToken({ id, username });
    console.log({ token });
    
    res.status(StatusCodes.OK).json({ token });
  } catch (error) {
    console.log({ error });
      
    next(error);
  }
};

export default {
  create,
};