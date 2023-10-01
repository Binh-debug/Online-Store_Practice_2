import { Request, Response, NextFunction } from 'express';
import { userStore } from '../models/user.model';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const { SECRET_KEY } = process.env;
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
		const { id } = req.params;
		const result = await user.showUser(id);
		console.log(result);

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

export const userAuthentication = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const user = new userStore();
		const { lastName, password } = req.body;
		const userInfo = await user.authentication(lastName, password);
		if (!userInfo) {
			return res.status(401).json({
				message: 'User Info Invalid'
			});
		}
		const token = jwt.sign({ userInfo }, SECRET_KEY);
		return res.status(200).json({
			data: {
				...userInfo,
				token
			}
		});
	} catch (error) {
		next(error);
	}
};
