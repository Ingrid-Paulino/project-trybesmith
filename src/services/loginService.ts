import userModel from '../models/userModel';
import { ILogin } from '../interfaces/interfaces';
import validateErrorObj from '../utils';

const login = async ({ username, password }: ILogin) => {
  // Se houvesse um email, eu poderia dessa forma conferir se ja não existia um usuario com o mesmo
  const allUser = await userModel.getAll();
  const filterEmail = allUser.find(
    (user) => user.username === username && user.password === password,
  );
  
  if (!filterEmail) return validateErrorObj(401, 'Username or password invalid');
  return filterEmail;
};
  
export default {
  login,
};