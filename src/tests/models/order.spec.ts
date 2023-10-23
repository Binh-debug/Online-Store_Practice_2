import { orderStore } from '../../models/order.model';

const order_method = new orderStore();

describe('Test order models ', () => {
	it('Should have an getCurrentOrder method', () => {
		expect(order_method.getCurrentOrder).toBeDefined();
	});
	it('Should have an getOrderSuccessByUser method', () => {
		expect(order_method.getOrderSuccessByUser).toBeDefined();
	});
	it('Fetch order product', async () => {
		const order_product = await order_method.getCurrentOrder('1');
		expect(order_product.length).toBeGreaterThan(0);
	});
});
