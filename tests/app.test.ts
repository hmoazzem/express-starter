import express from 'express';
import request from 'supertest';

const app: express.Application = require('../src/app')
describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
})