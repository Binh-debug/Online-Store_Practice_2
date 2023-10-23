import { productStore } from '../../models/product.model';

const product_method = new productStore();
describe('Test order models ', () => {
	it('Should have an showProducts method', () => {
		expect(product_method.showProducts).toBeDefined();
	});
	it('Should have an showProduct method', () => {
		expect(product_method.showProduct).toBeDefined();
	});
	it('Should have an createProduct method', () => {
		expect(product_method.createProduct).toBeDefined();
	});
	it('Fetch all products', async () => {
		const product = {
			name: 'product_1',
			price: 150,
			category: 'category_1'
		};
		await product_method.createProduct(product);
		const products = await product_method.showProducts();
		expect(products.length).toBeGreaterThan(0);
	});
	it('Fetch product with id = 1 ', async () => {
		const product = await product_method.showProduct('1');
		expect(product).toEqual({
			id: 1,
			name: 'iphone15',
			price: 1200,
			category: 'smart phone'
		});
	});
});
