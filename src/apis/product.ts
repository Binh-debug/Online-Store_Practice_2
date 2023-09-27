import { Router } from 'express';
import {
	handleCreateProduct,
	handleShowProduct,
	handleShowProducts
} from '../handles/product';

const productRoute = Router();

productRoute.get('/', handleShowProducts);
productRoute.get('/:id', handleShowProduct);
productRoute.post('/', handleCreateProduct);

export default productRoute;
