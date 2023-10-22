import express, { Application } from 'express';
import dotenv from 'dotenv';
import apiRoute from './apis';
import cors from 'cors';

const app: Application = express();
dotenv.config();
const { PORT } = process.env;

app.use('/api', apiRoute);
app.use(cors());

app.listen(PORT, () => {
	console.log(`Server is running with port : ${PORT}`);
});
export default app;
