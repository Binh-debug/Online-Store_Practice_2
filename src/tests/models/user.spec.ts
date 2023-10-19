import { userStore } from '../../models/user.model';

const user = new userStore();
describe('Test order models ', () => {
	it('Should have an getCurrentOrder method', () => {
		expect(user.showUsers).toBeDefined();
	});
	it('Should have an getOrderSuccessByUser method', () => {
		expect(user.showUser).toBeDefined();
	});
	it('Should have an createUser method', () => {
		expect(user.createUser).toBeDefined();
	});
	it('Should have an authentication method', () => {
		expect(user.authentication).toBeDefined();
	});
});
