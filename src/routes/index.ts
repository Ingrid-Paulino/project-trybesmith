import express from 'express';
import userRoute from './userRoute';
import loginRoute from './loginRouter';

const route = express.Router({ mergeParams: true });

route.use('/users', userRoute);
route.use('/login', loginRoute);

export default route;