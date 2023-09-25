import { Router } from 'express';
import {
	handleCreateUser,
	handleShowUser,
	handleShowUsers
} from '../handles/user';

const userRoute = Router();
userRoute.get('/', handleShowUsers);
userRoute.get('/:id', handleShowUser);
userRoute.post('/', handleCreateUser);
export default userRoute;
