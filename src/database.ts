import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const { HOST, DATABASE, USER, PASSWORD, TEST_DATABASE, ENV } = process.env;

let database = new Pool({
	host: HOST,
	database: DATABASE,
	user: USER,
	password: PASSWORD
});
if (ENV === 'test') {
	database = new Pool({
		host: HOST,
		database: TEST_DATABASE,
		user: USER,
		password: PASSWORD
	});
}
console.log('----------', ENV);

export default database;
