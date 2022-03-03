import { Request, Response, NextFunction } from 'express';
import { IProduct, Product } from '../interfaces/interfaces';
import { StatusCodes } from '../enum/enumStatusCodes';
import productService from '../services/productService';

const getAll = async (req: Request, res: Response) => {
  const users: Product[] = await productService.getAll();
  res.status(200).json(users);
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount }: IProduct = req.body;
  
  try {
    const newProduct: Product = await productService.create({ name, amount });

    res.status(StatusCodes.CREATED).json({ item: newProduct });
  } catch (error) {
    next(error);
  }
};

// const update = async (req: Request, res: Response, next: NextFunction) => {
//   const { id } = req.params;
//   // const { name, quantity } = req.body;
//   const uupdateProduct = { id, ...req.body };
  
//   const product = await productService.updateProduct(uupdateProduct);

//   if ('status' in product) return next(product);

//   return res.status(200).json(product);
// };

export default {
  create,
  getAll,
};