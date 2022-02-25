import { Request, Response, NextFunction } from 'express';
import { MSG, StatusCodes } from '../enum/enumStatusCodes';
import { IProduct, IUser } from '../interfaces/interfaces';

const verifyUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username }: IUser = req.body;

  if (!username) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: MSG.NOT_USERNAME });
  }

  if (typeof username !== 'string') {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.USERNAME_NOT_STRING });
  }

  if (username.length <= 2) {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.USERNAME_SHORT });
  }

  next();
};

const verifyclasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe }: IUser = req.body;

  if (!classe) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: MSG.NOT_CLASSE });
  }

  if (typeof classe !== 'string') {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.CLASSE_NOT_STRING });
  }

  if (classe.length <= 2) {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.CLASSE_SHORT });
  }

  next();
};

const verifylevel = (req: Request, res: Response, next: NextFunction) => {
  const { level }: IUser = req.body;

  if (level === undefined) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: MSG.NOT_LEVEL });
  }

  if (typeof level !== 'number') {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.LEVEL_NOT_NUMBER });
  }

  if (level <= 0) {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.LEVEL_NOT_RIGTH });
  }

  next();
};

const verifypassword = (req: Request, res: Response, next: NextFunction) => {
  const { password }: IUser = req.body;
  
  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: MSG.NOT_PASSWORD });
  }

  if (typeof password !== 'string') {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.PASSWORD_NOT_STRING });
  }

  if (password.length < 8) {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.PASSWORD_SHORT });
  }

  next();
};

const verifynameproduct = (req: Request, res: Response, next: NextFunction) => {
  const { name }: IProduct = req.body;

  if (!name) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: MSG.NOT_NAME });
  }

  if (typeof name !== 'string') {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.NAME_NOT_STRING });
  }

  if (name.length <= 2) {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.NAME_SHORT });
  }

  next();
};

const verifyamountproduct = (req: Request, res: Response, next: NextFunction) => {
  const { amount }: IProduct = req.body;

  if (!amount) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: MSG.NOT_AMOUNT });
  }

  if (typeof amount !== 'string') {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.AMOUNT_NOT_STRING });
  }

  if (amount.length <= 2) {
    return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.AMOUNT_SHORT });
  }

  next();
};

export default { 
  verifyUsername,
  verifyclasse,
  verifylevel,
  verifypassword,
  verifynameproduct,
  verifyamountproduct,
};