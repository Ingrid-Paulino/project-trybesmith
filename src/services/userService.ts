import modelUser from '../models/userModel';
import { IUser, User } from '../interfaces/userInterface';

const create = async ({ username, classe, level, password }: IUser): Promise<User> => {
  // Se houvesse um email, eu poderia dessa forma conferir se ja não existia um usuario com o mesmo
  // const allUser = await modelUser.getAll();
  // const filterEmail = allUsers.find(({ i }) => i.id === id);
  // if (filterEmail) throw...
  console.log('oi');

  const newUser = await modelUser.create({ username, classe, level, password });
  return newUser;
};
  
export default {
  create,
};