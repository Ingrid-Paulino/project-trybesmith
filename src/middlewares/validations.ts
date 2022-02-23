import { Request, Response, NextFunction } from 'express';

import validateErrorObj from '../utils';

import UserSchema from '../schemas/userSchema';

const userValidate = (req: Request, _res: Response, next: NextFunction) => {
  const { userName, classe, level, password } = req.body;

  const { error } = UserSchema.validate({ userName, classe, level, password });

  if (error) return validateErrorObj(400, error.details[0].message);

  if (level < 0) return validateErrorObj(422, 'Level must be greater than 0');

  next();
};

export default userValidate;