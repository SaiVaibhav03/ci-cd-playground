const app = require('./app');

const server = app.listen(3000, () => {
	console.log('Server started listening on Port 3000');
});
