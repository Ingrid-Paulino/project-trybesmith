import ordersModel from '../models/ordersModel';
// import { IOrder, OrderProducts } from '../interfaces/interfaces';
import { IOrder } from '../interfaces/interfaces';
import validateErrorObj from '../utils';
// import { AA } from '../types/typeValidation';

const create = async ({ idUser, products }: IOrder): Promise<IOrder> => {
  const productsOrder = await ordersModel.create({ idUser, products });
  return productsOrder;
};

// const getById = async (id: number): Promise<OrderProducts | AA> => {
const getById = async (id: number) => {
  const order = await ordersModel.getById(id);
  console.log({ order });
  // pq nn deu certo order.userId
  if (!order.row.length) return validateErrorObj(404, 'Order not found');
  
  const objectOrderUserId = order.userId;
  // if (!objectOrderUserId?.length) return validateErrorObj(404, 'Order not found');
  const userId = objectOrderUserId?.map((user) => user.userId)[0];

  const objectOrderProduct = order.row;
  const products = objectOrderProduct?.map((product) => product.products);

  return { id, userId, products };
};

const getAll = async () => {
  const order = await ordersModel.getAll();
  console.log({ order });
  
  const objectOrderUserId = order.userId;
  console.log({ objectOrderUserId });
  
  // const userId = objectOrderUserId?.map((user) => user.userId);
  // console.log({ userId });
  
  const objectOrderProduct = order.row;
  const products = objectOrderProduct?.map((product) => product.products);

  return { objectOrderUserId, products };
};
  
export default {
  create,
  getById,
  getAll,
};