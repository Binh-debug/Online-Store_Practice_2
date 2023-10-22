import database from '../database';
import { orderType } from '../types';

export class orderStore {
	async getCurrentOrder(userId: string): Promise<orderType[]> {
		try {
			const queryString = `'SELECT op.quantity, p.name, p.price, op.product_id, o.user_id, op.order_id
            FROM orders as o
            JOIN order_products as op ON o.id = op.order_id
            JOIN products as p ON op.product_id = p.id
            WHERE o.user_id = ($1)'`;
			const connection = await database.connect();
			const result = await connection.query(queryString, [userId]);
			connection.release();
			return result.rows;
		} catch (error) {
			throw new Error(
				`Could not get current order by user. ---Error: ${error}`
			);
		}
	}
	async getOrderSuccessByUser(userId: string): Promise<orderType[]> {
		try {
			const queryString =
				'SELECT * FROM orders WHERE user_id = ($1) AND orderStatus = "Done"';
			const connection = await database.connect();
			const result = await connection.query(queryString, [userId]);
			connection.release();
			return result.rows;
		} catch (error) {
			throw new Error(`Could not get order success `);
		}
	}
}
