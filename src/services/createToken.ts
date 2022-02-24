import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
import { Payload, Secret } from '../types/typeValidation';
// import { JwtConfig } from '../interfaces/userInterface';

// dotenv.config();
// const { SECRETJWT } = process.env;

const SECRET: Secret = 'seusecretdetoken';

// const jwtConfig = {
//   expiresIn: '7d',
//   algorithm: 'HS256',
// };

const createToken = (payload: Payload) => { 
  const token = jwt.sign({ data: payload }, SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
    
  return token;
};

export default createToken;