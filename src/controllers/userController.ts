import { Request, Response } from 'express';
import { IUser } from '../interfaces/userInterface';
import { Token } from '../types/typeValidation';
import { StatusCodes } from '../enum/enumStatusCodes';
import serviceUser from '../services/userService';
import createToken from '../services/createToken';

const create = async (req: Request, res: Response<Token>) => {
  // const { username, classe, level, password } = req.body as User;
  // OU
  // const newUser = req.body as IUser;
  // OU
  const { username, classe, level, password }: IUser = req.body;
  const { id } = await serviceUser.create({ username, classe, level, password });

  const token = createToken({ id, username });

  return res.status(StatusCodes.OK).json(token);
};

export default {
  create,
};