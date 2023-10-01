import { Router } from 'express';
import {
	handleCreateUser,
	handleShowUser,
	handleShowUsers,
	userAuthentication
} from '../handles/user';
import { authentication } from '../middleware/authentication';

const userRoute = Router();
userRoute.get('/', authentication, handleShowUsers);
userRoute.get('/:id', authentication, handleShowUser);
userRoute.post('/', authentication, handleCreateUser);
userRoute.post('/login', userAuthentication);
export default userRoute;
