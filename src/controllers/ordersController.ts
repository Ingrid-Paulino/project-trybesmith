import { Request, Response, NextFunction } from 'express';
// import { IOrder, OrderProducts } from '../interfaces/interfaces';
import { IOrder } from '../interfaces/interfaces';

import { StatusCodes } from '../enum/enumStatusCodes';
import ordersService from '../services/ordersService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { idUser, products }: IOrder = req.body;
  
  try {
    const newProducts: IOrder = await ordersService.create({ idUser, products });
    res.status(StatusCodes.CREATED).json({ order: newProducts });
  } catch (error) {
    next(error);
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  
  // const order: OrderProducts = await ordersService.getById(Number(id));
  const order = await ordersService.getById(Number(id));
  if ('status' in order) return next(order);

  res.status(200).json(order);
};

const getAll = async (req: Request, res: Response) => {
  console.log('oi1');
  
  const order = await ordersService.getAll();
  res.status(200).json(order);
};

export default {
  create,
  getById,
  getAll,
};