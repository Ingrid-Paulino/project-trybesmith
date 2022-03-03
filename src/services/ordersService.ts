import ordersModel from '../models/ordersModel';
import { IProducts } from '../interfaces/interfaces';

const create = async ({ idUser, products }: IProducts): Promise<IProducts> => {
  const productsOrder = await ordersModel.create({ idUser, products });
  return productsOrder;
};
  
export default {
  create,
};