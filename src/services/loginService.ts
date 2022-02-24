import loginModel from '../models/loginModel';
import { ILogin, Login } from '../interfaces/loginInterface';

const create = async ({ username, password }: ILogin): Promise<Login> => {
  // Se houvesse um email, eu poderia dessa forma conferir se ja não existia um usuario com o mesmo
  // const allUser = await modelUser.getAll();
  // const filterEmail = allUsers.find(({ i }) => i.id === id);
  // if (filterEmail) throw...
  const newLogin = await loginModel.create({ username, password });
  return newLogin;
};
  
export default {
  create,
};