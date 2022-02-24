import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
// import dotenv from 'dotenv';
import { StatusCodes, MSG } from '../../enum/enumStatusCodes';

// dotenv.config();
// const { SECRETJWT } = process.env;

const SECRET = 'seusecretdetoken';

export default async (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(StatusCodes.NOT_FOUND).json(MSG.TOKEN_NOT_FOUND);
  }

  try {
    /* Através o método verify, podemos validar e decodificar o nosso JWT. */
    const decoded = jwt.verify(token, SECRET);
  
    return decoded;
    // console.log('decoded', decoded);

    // Quando eu fizer o FindById eu volto aqui
    // const user = await User.findOne({ where: { email: decoded.data } });
    // console.log('decoded', user);

    // if (!user) {
    //   return res.status(404).json({ message: 'User does not exist' });
    // }

    // req.email = decoded.data;
    // ou se não tivesse o decode.data.email la no findOne
    // req.user = user;

    // console.log('req', req);
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};