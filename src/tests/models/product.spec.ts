import { productStore } from '../../models/product.model';

const product = new productStore();
describe('Test order models ', () => {
	it('Should have an showProducts method', () => {
		expect(product.showProducts).toBeDefined();
	});
	it('Should have an showProduct method', () => {
		expect(product.showProduct).toBeDefined();
	});
	it('Should have an createProduct method', () => {
		expect(product.createProduct).toBeDefined();
	});
});
