import { Router } from 'express';
import {
	handleCreateProduct,
	handleShowProduct,
	handleShowProducts
} from '../handles/product';
import { authentication } from '../middleware/authentication';

const productRoute = Router();

productRoute.get('/', handleShowProducts);
productRoute.get('/:id', handleShowProduct);
productRoute.post('/', authentication, handleCreateProduct);

export default productRoute;
