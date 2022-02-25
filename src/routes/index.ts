import express from 'express';
import userRoute from './userRoute';
import loginRoute from './loginRouter';
import productRoute from './productRoute';

const route = express.Router({ mergeParams: true });

route.use('/users', userRoute);
route.use('/login', loginRoute);
route.use('/products', productRoute);

export default route;