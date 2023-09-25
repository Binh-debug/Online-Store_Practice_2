import { Router } from 'express';
import { getOrderByUser } from '../handles/order';

const orderRoute = Router();

orderRoute.get('/:id', getOrderByUser);

// TODO: handle get order status = done
// orderRoute.get('/:id',)

export default orderRoute;
