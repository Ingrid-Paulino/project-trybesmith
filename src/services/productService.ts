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

// const updateProduct = async ({ id, name, quantity }) => {
//   const productId = await productModel.getById(id);
//   // console.log(productId);
//   if (!productId) return { status: 404, message: 'Product not found' };
//   const update = await productModel.update(id, name, quantity);
//   // console.log('update', update);
//   return update;
// };
  
export default {
  create,
  getAll,
};