import supertest from 'supertest';
import app from '../../app';
import { userStore } from '../../models/user.model';
import { productStore } from './../../models/product.model';

const request = supertest(app);
let token: string = '';
const user = new userStore();
const product = new productStore();

describe('Check endpoint product', () => {
	beforeAll(async () => {
		await user.createUser({
			firstName: 'nguyen',
			lastName: 'tran',
			password: '123'
		});
		const response = await request.post('/user/login').send({
			lastName: 'tran',
			password: '123'
		});
		token = response.body;
	});

	it('Check endpoint create product', async () => {
		const response = await request
			.post('/product')
			.send({
				name: 'iphone',
				price: 1000,
				category: 'smart phone'
			})
			.set('authorization', `Bearer ${token}`);
		expect(response.statusCode).toBe(201);
	});

	it('Show all products', async () => {
		const response = await request
			.get('/product')
			.set('authorization', `Bearer ${token}`);
		expect(response.statusCode).toBe(200);
	});

	it('Show product by id', async () => {
		await product.createProduct({
			name: 'iphone',
			price: 1000,
			category: 'smart phone'
		});
		const response = await request
			.get('/product/1')
			.set('authorization', `Bearer ${token}`);

		expect(response.statusCode).toBe(200);
	});
});

describe('Check endpoint user', () => {
	beforeAll(async () => {
		await user.createUser({
			firstName: 'nguyen',
			lastName: 'tran',
			password: '123'
		});
		const response = await request.post('/user/login').send({
			lastName: 'tran',
			password: '123'
		});

		token = response.body;
	});

	it('Check endpoint create user', async () => {
		const response = await request.post('/user').send({
			firstName: 'nguyen',
			lastname: 'tran',
			password: '123'
		});

		expect(response.statusCode).toBe(201);
	});

	it('Show all users', async () => {
		async () => {
			const response = await request
				.get('/users')
				.set('authorization', `Bearer ${token}`);
			expect(response.statusCode).toBe(200);
		};
	});
});
