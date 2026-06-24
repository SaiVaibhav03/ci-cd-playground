const request = require('supertest');
const app = require('../src/app');

describe('routes', () => {
	test('should return cats endpoint', async () => {
		const res = await request(app).get('/cats');
		expect(res.body.message).toBe('cats endpoint');
		expect(res.status).toBe(200);
	});

	test('should return dogs endpoint', async () => {
		const res = await request(app).get('/dogs');
		expect(res.body.message).toBe('dogs endpoint');
		expect(res.status).toBe(200);
	});

	test('should return birds endpoint', async () => {
		const res = await request(app).get('/birds');
		expect(res.body.message).toBe('birds endpoint');
		expect(res.status).toBe(200);
	});

	test('should return fish endpoint', async () => {
		const res = await request(app).get('/fish');
		expect(res.body.message).toBe('fish endpoint');
		expect(res.status).toBe(200);
	});
});
