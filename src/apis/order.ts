import { Router } from 'express';
import { getOrderByUser } from '../handles/order';
import { authentication } from '../middleware/authentication';

const orderRoute = Router();

orderRoute.get('/:id', authentication, getOrderByUser);

export default orderRoute;
