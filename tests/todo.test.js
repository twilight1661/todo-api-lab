const request = require('supertest');
const app = require('../app');

describe('GET /todos', () => {
  it('should return all todos', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /todos', () => {
  it('creates a new todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ title: 'Test Todo' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Test Todo');
  });
});