import { Request, Response, NextFunction } from 'express';
import { IProduct, Product } from '../interfaces/interfaces';
import { StatusCodes } from '../enum/enumStatusCodes';
import productService from '../services/productService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount }: IProduct = req.body;
  
  try {
    const newProduct: Product = await productService.create({ name, amount });

    res.status(StatusCodes.CREATED).json({ item: newProduct });
  } catch (error) {
    next(error);
  }
};

export default {
  create,
};