import productModel from '../models/productModel';
import { IProduct, Product } from '../interfaces/interfaces';

const getAll = async (): Promise<Product[]> => {
  const users: Product[] = await productModel.getAll();
  return users;
};

const create = async ({ name, amount }: IProduct): Promise<Product> => {
  const newProduct = await productModel.create({ name, amount });
  return newProduct;
};
  
export default {
  create,
  getAll,
};