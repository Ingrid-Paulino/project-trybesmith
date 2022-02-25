import modelUser from '../models/userModel';
import { IUser, User } from '../interfaces/interfaces';

const getAll = async (): Promise<User[]> => {
  const users: User[] = await modelUser.getAll();
  return users;
};

const create = async ({ username, classe, level, password }: IUser): Promise<User> => {
  const newUser = await modelUser.create({ username, classe, level, password });
  return newUser;
};
  
export default {
  create,
  getAll,
};