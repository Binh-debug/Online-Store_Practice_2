import { Request, Response, NextFunction } from 'express';
import { productStore } from '../models/product.model';

export const handleShowProducts = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const product = new productStore();
		const result = product.showProducts();
		res.status(200).json({
			data: result
		});
	} catch (error) {
		next(error);
	}
};

export const handleShowProduct = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const product = new productStore();
		const result = product.showProduct(req.body);
		res.status(200).json({
			data: result
		});
	} catch (error) {
		next(error);
	}
};

export const handleCreateProduct = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const product = new productStore();
		console.log(req.body);

		// const result = product.createProduct(req.body);
		// res.status(200).json({
		// 	data: result
		// });
	} catch (error) {
		next(error);
	}
};
