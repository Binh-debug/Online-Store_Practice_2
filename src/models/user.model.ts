import database from '../database';
import { userType } from '../types';

export class userStore {
	async showUsers(): Promise<userType[]> {
		try {
			const queryString = 'SELECT * FROM users;';
			const connection = await database.connect();
			const result = await connection.query(queryString);
			connection.release();
			return result.rows;
		} catch (error) {
			throw new Error(`Could not get all user. --- ERROR:${error}`);
		}
	}
	async showUser(id: string): Promise<userType> {
		try {
			const queryString = 'SELECT * FROM users WHERE id =($1);';
			const connection = await database.connect();
			const result = await connection.query(queryString, [id]);
			connection.release();
			return result.rows[0];
		} catch (error) {
			throw new Error('');
		}
	}

	async createUser({
		firstName,
		lastName,
		password
	}: {
		firstName: string;
		lastName: string;
		password: string;
	}): Promise<userType> {
		try {
			const queryString =
				'INSERT INTO users (firstName, lastName, password) VALUES ($1,$2,$3);';

			const connection = await database.connect();
			const result = await connection.query(queryString, [
				firstName,
				lastName,
				password
			]);
			connection.release();
			return result.rows[0];
		} catch (error) {
			throw new Error(`Could not create user. ---ERROR:${error}`);
		}
	}
}
