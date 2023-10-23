import database from '../database';
import { userType } from '../types';
import bcrypt from 'bcrypt';
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
			const saltRounds = 10;
			const hashedPassword = await bcrypt.hash(password, saltRounds);
			console.log('password hashed', hashedPassword);

			const queryString =
				'INSERT INTO users (first_name, last_name, pass) VALUES ($1,$2,$3) RETURNING * ;';
			const connection = await database.connect();

			const result = await connection.query(queryString, [
				firstName,
				lastName,
				hashedPassword
			]);
			connection.release();
			return result.rows[0];
		} catch (error) {
			throw new Error(`Could not create user. ---ERROR:${error}`);
		}
	}

	async authentication(
		lastName: string,
		password: string
	): Promise<userType | null> {
		try {
			const queryPassword =
				'SELECT pass FROM users WHERE last_name =($1);';
			const queryInfo = 'SELECT * FROM users WHERE last_name = ($1)';
			const connection = await database.connect();
			const result = await connection.query(queryPassword, [lastName]);
			if (result.rows.length) {
				const idValidPassword = bcrypt.compare(
					password,
					result.rows[0].pass
				);
				if (idValidPassword) {
					const userInfo = await connection.query(queryInfo, [
						lastName
					]);
					return userInfo.rows[0];
				}
			}
			connection.release();
			return null;
		} catch (error) {
			throw new Error('Could not authentication');
		}
	}
}
