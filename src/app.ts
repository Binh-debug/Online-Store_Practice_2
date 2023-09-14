import express from 'express';

const app = express();

app.get('/', (_req, res) => {
	console.log('running');
	res.send('Online Store ');
});

app.listen(3000, () => {
	console.log('Server running');
});
