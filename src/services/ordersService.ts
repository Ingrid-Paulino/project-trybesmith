import ordersModel from '../models/ordersModel';
import { IOrder, OrderProducts } from '../interfaces/interfaces';
// import { IOrder } from '../interfaces/interfaces';
import validateErrorObj from '../utils';
import { AA, ObjOrderProducts } from '../types/typeValidation';

const create = async ({ idUser, products }: IOrder): Promise<IOrder> => {
  const productsOrder = await ordersModel.create({ idUser, products });
  return productsOrder;
};

const getById = async (id: number): Promise<OrderProducts> => {
  const order = await ordersModel.getById(id);
  console.log({ order });

  // DICA: Quando eu tiver mais de 1 retorno, eu posso tipar nele direto 
  if (!order.row.length) return validateErrorObj(404, 'Order not found') as AA;
  // OU
  // if (!order.userId?.length) return validateErrorObj(404, 'Order not found') as AA;

  const objectOrderUserId = order.userId;
  const userId = objectOrderUserId?.map((user) => user.userId)[0];

  const objectOrderProduct = order.row;
  const products = objectOrderProduct?.map((product) => product.products);

  return { id, userId, products };
};

const getAll = async () => {
  const order = await ordersModel.getAll();
  const arrayOrder = order.row;

  const userMaisId: ObjOrderProducts[] = arrayOrder.map((oorder) => {
    const obj: ObjOrderProducts = { id: oorder.id, userId: oorder.userId, products: [] };
    arrayOrder.forEach((wsd: any) => {
      if (oorder.id === wsd.id) {
        obj.products.push(wsd.products);
      }
    });
    return obj;
  });

  // fonte: https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
  const ids = userMaisId.map((o) => o.id);
  const filtered = userMaisId.filter(({ id }, index) => !ids.includes(id, index + 1));
  
  return filtered;
};
  
export default {
  create,
  getById,
  getAll,
};