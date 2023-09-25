import { Router } from 'express';
import {
	handleCreateUser,
	handleShowUser,
	handleShowUsers
} from '../handles/user';

const productRoute = Router();

productRoute.get('/', handleShowUsers);
productRoute.get('/:id', handleShowUser);
productRoute.post('/', handleCreateUser);

export default productRoute;
