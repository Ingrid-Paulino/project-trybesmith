import { Request, Response, NextFunction } from 'express';
import { MSG, StatusCodes } from '../enum/enumStatusCodes';
import { IUser } from '../interfaces/userInterface';

const verifyUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username }: IUser = req.body;

  if (!username) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: MSG.NOT_USERNAME });
  }



  next();
};

const verifypassword = (req: Request, res: Response, next: NextFunction) => {
  const { password }: IUser = req.body;
    
  if (!password) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: MSG.NOT_PASSWORD });
  }
  
//   if (typeof password !== 'string') {
//     return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.PASSWORD_NOT_STRING });
//   }
  
//   if (password.length < 8) {
//     return res.status(StatusCodes.UNPROCCESSABLE_ENTITY).json({ error: MSG.PASSWORD_SHORT });
//   }
  
  next();
};

export default { 
  verifyUsername,
  verifypassword,
};