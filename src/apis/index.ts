import { Router } from 'express';
import orderRoute from './order';
import productRoute from './product';
import userRoute from './user';

const apiRoute = Router();

apiRoute.use('/order', orderRoute);
apiRoute.use('/product', productRoute);
apiRoute.use('/user', userRoute);

export default apiRoute;
