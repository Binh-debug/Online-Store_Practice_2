import { Request, Response, NextFunction } from 'express';
import { userStore } from '../models/user.model';

export const handleShowUsers = async (
	_req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const user = new userStore();
		const result = await user.showUsers();
		res.status(200).json({
			data: result
		});
	} catch (error) {
		next(error);
	}
};

export const handleShowUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const user = new userStore();
		const result = await user.showUser(req.body);
		res.status(200).json({
			data: result
		});
	} catch (error) {
		next(error);
	}
};

export const handleCreateUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const user = new userStore();
		const result = await user.createUser(req.body);
		res.status(200).json({
			data: result
		});
	} catch (error) {
		next(error);
	}
};
