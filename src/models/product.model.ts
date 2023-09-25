import database from '../database';
import { productType } from '../types';

export class productStore {
	async showProducts(): Promise<productType[]> {
		try {
			const queryString = 'SELECT * FROM products;';
			const connection = await database.connect();
			const result = await connection.query(queryString);
			connection.release();
			return result.rows;
		} catch (error) {
			throw new Error(
				`Could not get products. ------ Error:${error}--------`
			);
		}
	}

	async showProduct(id: string): Promise<productType> {
		try {
			const queryString = 'SELECT * FROM product WHERE id =($1);';
			const connection = await database.connect();
			const result = await database.query(queryString, [id]);
			connection.release();
			return result.rows[0];
		} catch (error) {
			throw new Error(
				`Could not get product with ID = ${id}. ------ Error:${error}--------`
			);
		}
	}

	async createProduct({
		name,
		price,
		category
	}: {
		name: string;
		price: number;
		category: string;
	}): Promise<productType> {
		try {
			const queryString =
				'INSERT INTO products (id, name, price, category) VALUES ($1, $2, $3) RETURNING *;';
			const connection = await database.connect();
			const result = await connection.query(queryString, [
				name,
				price,
				category
			]);

			connection.release();
			return result.rows[0];
		} catch (error) {
			throw new Error(
				`Could not create product with ID = ${123}.--- ERROR: ${error}`
			);
		}
	}
}
