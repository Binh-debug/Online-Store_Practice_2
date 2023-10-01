import { Request, Response, NextFunction } from 'express';
import { orderStore } from '../models/order.model';

export const getOrderByUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const orderModel = new orderStore();
		const { id } = req.params;
		const result = await orderModel.getCurrentOrder(id);
		res.status(200).json({
			data: result
		});
		next();
	} catch (error) {
		next(error);
	}
};
