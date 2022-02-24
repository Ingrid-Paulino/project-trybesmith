import { Request, Response, NextFunction } from 'express';
import { IUser, User } from '../interfaces/userInterface';
// import { Token } from '../types/typeValidation';
import { StatusCodes } from '../enum/enumStatusCodes';
import serviceUser from '../services/userService';
import createToken from '../services/createToken';

const create = async (req: Request, res: Response, next: NextFunction) => {
  // const { username, classe, level, password } = req.body as User;
  // OU
  // const newUser = req.body as IUser;
  // OU
  const { username, classe, level, password }: IUser = req.body;
  
  try {
    const newUser: User = await serviceUser.create({ username, classe, level, password });
    const { id } = newUser;
    const token = await createToken({ id, username });
    res.status(StatusCodes.CREATED).json({ token });
  } catch (error) {
    next(error);
  }
};

export default {
  create,
};
