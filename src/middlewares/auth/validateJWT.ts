import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes, MSG } from '../../enum/enumStatusCodes';
import validateErrorObj from '../../utils';
// import userModel from '../../models/userModel';
import { DecodeData } from '../../types/typeValidation';

const SECRET = 'seusecretdetoken';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token || token === '') {
    return next(validateErrorObj(StatusCodes.UNAUTHORIZED, MSG.TOKEN_NOT_FOUND));
  }
  
  try {
    /* Através o método verify, podemos validar e decodificar o nosso JWT. */
    const decoded = jwt.verify(token, SECRET) as DecodeData;
    console.log('decoded', decoded);
    // console.log(req.body);

    req.body = { idUser: decoded.data.id, ...req.body };
    next();
  } catch (err) {
    next(validateErrorObj(StatusCodes.UNAUTHORIZED, MSG.TOKEN_INVALID));
  }
};