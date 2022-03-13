import ordersModel from '../models/ordersModel';
import { IOrder, OrderProducts } from '../interfaces/interfaces';
import validateErrorObj from '../utils';
import { AA, ObjOrderProducts } from '../types/typeValidation';

const create = async ({ idUser, products }: IOrder): Promise<IOrder> => {
  const orderProducts = await ordersModel.create({ idUser, products });
  return orderProducts;
};

const getById = async (id: number): Promise<OrderProducts> => {
  const order = await ordersModel.getById(id);

  // DICA: Quando eu tiver mais de 1 retorno, eu posso tipar nele direto 
  if (!order.row.length) return validateErrorObj(404, 'Order not found') as AA;
  // OU
  // if (!order.userId?.length) return validateErrorObj(404, 'Order not found') as AA;

  const orderUserId = order.userId;
  const userId = orderUserId?.map((user) => user.userId)[0];

  const orderProduct = order.row;
  const products = orderProduct?.map((product) => product.products);
  return { id, userId, products };
};

const getAll = async () => {
  const order = await ordersModel.getAll();
  const arrayOrder = order.row;

  const objectsOrder: ObjOrderProducts[] = arrayOrder.map((oorder) => {
    const obj: ObjOrderProducts = { id: oorder.id, userId: oorder.userId, products: [] };
    arrayOrder.forEach((objOrder: any) => {
      if (oorder.id === objOrder.id) {
        obj.products.push(objOrder.products);
      }
    });
    return obj;
  });

  // fonte: https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
  const ids = objectsOrder.map((o) => o.id);
  const filtered = objectsOrder.filter(({ id }, index) => !ids.includes(id, index + 1));
  
  return filtered;
};
  
export default {
  create,
  getById,
  getAll,
};