import express from 'express';
import userRoute from './userRoute';
import loginRoute from './loginRouter';
import productRoute from './productRoute';
import ordersRoute from './ordersRoute';

const route = express.Router({ mergeParams: true });

route.use('/users', userRoute);
route.use('/login', loginRoute);
route.use('/products', productRoute);
route.use('/orders', ordersRoute);
export default route;