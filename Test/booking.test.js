const request = require('supertest');
const app = require('../app');

it('GET /', async () => {
    const res = await request(app).get('/booking');
   
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(true);
    expect(res.body.booked).toEqual(
        []
    )
});