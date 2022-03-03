import { Request, Response, NextFunction } from 'express';
import { IProducts } from '../interfaces/interfaces';
import { StatusCodes } from '../enum/enumStatusCodes';
import ordersService from '../services/ordersService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { idUser, products }: IProducts = req.body;
  
  try {
    const newProducts: IProducts = await ordersService.create({ idUser, products });
    res.status(StatusCodes.CREATED).json({ order: newProducts });
  } catch (error) {
    next(error);
  }
};

export default {
  create,
};