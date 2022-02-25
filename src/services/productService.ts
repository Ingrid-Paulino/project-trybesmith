import productModel from '../models/productModel';
import { IProduct, Product } from '../interfaces/interfaces';

const create = async ({ name, amount }: IProduct): Promise<Product> => {
  const newProduct = await productModel.create({ name, amount });
  return newProduct;
};
  
export default {
  create,
};