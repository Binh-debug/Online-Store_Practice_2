import database from '../database';
import { orderType } from '../types';

export class orderStore {
	async getCurrentOrder(userId: string): Promise<orderType[]> {
		try {
			const queryString = 'SELECT * FROM orders WHERE userId = ($1);';
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
				'SELECT * FROM orders WHERE userId = ($1) AND orderStatus = "Done"';
			const connection = await database.connect();
			const result = await connection.query(queryString, [userId]);
			connection.release();
			return result.rows;
		} catch (error) {
			throw new Error(`Could not get order success `);
		}
	}
}
