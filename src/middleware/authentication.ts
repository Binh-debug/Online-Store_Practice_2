import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const authentication = (
	req: Request,
	_res: Response,
	next: NextFunction
) => {
	try {
		const { SECRET_KEY } = process.env;
		const authorizationHeader = req.headers.authorization;
		const token = authorizationHeader?.split('')[1];

		if (token) {
			const isValidToken = jwt.verify(token, SECRET_KEY);
			if (isValidToken) next();
		} else {
			const error = new Error('Token is invalid');
			next(error);
		}
	} catch (error) {
		next(error);
	}
};
