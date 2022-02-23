import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Payload, Secret } from '../types/typeValidation';

dotenv.config();
const { SECRETJWT } = process.env;

const SECRET = SECRETJWT;

const createToken = (payload: Payload) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
    
  const token = jwt.sign({ data: payload }, SECRET: Secret, jwtConfig);
    
  return token;
};

export default createToken;