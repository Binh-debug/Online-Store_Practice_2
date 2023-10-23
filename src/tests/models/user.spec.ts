import { userStore } from '../../models/user.model';
const user_method = new userStore();
describe('Test order models ', () => {
	it('Should have an getCurrentOrder method', () => {
		expect(user_method.showUsers).toBeDefined();
	});
	it('Should have an getOrderSuccessByUser method', () => {
		expect(user_method.showUser).toBeDefined();
	});
	it('Should have an createUser method', () => {
		expect(user_method.createUser).toBeDefined();
	});
	it('Should have an authentication method', () => {
		expect(user_method.authentication).toBeDefined();
	});
	it('Fetch all users', async () => {
		const user = {
			firstName: 'nguyen',
			lastName: 'tran',
			password: 'pass123'
		};
		await user_method.createUser(user);
		const users = await user_method.showUsers();
		expect(users.length).toBeGreaterThan(0);
	});
});
