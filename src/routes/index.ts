import express from 'express';

const route = express.Router({ mergeParams: true });

import userRoute from './userRoute';

route.use('/users', userRoute);

export default route;