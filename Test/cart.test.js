const request = require('supertest');
const app = require('../app');

it('POST /', async () => {
    const res = await request(app).post('/cart').send({
        departure: "Paris",
        arrival: "Bruxelles",
        date: "2023-11-16",
        price: 143,
    });
   
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(true);
});

it('GET /', async () => {
    const res = await request(app).get('/cart');
   
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(true);
});

it('DELETE /', async () => {
    const res = await request(app).delete('/cart').send({
        departure: "Paris",
        arrival: "Bruxelles",
        price: 143,
    });
   
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(true);
});