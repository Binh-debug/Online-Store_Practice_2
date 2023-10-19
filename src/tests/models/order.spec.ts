import { orderStore } from '../../models/order.model';

const order = new orderStore();

describe('Test order models ', () => {
	it('Should have an getCurrentOrder method', () => {
		expect(order.getCurrentOrder).toBeDefined();
	});
	it('Should have an getOrderSuccessByUser method', () => {
		expect(order.getOrderSuccessByUser).toBeDefined();
	});
});
