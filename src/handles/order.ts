import { Request, Response, NextFunction } from 'express';
import { orderStore } from '../models/order.model';

export const getOrderByUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const orderModel = new orderStore();
		const result = await orderModel.getCurrentOrder(req.body);
		res.status(200).json({
			data: result
		});
	} catch (error) {
		next(error);
	}
};
// TODO
// export const get;
