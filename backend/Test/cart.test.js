const request = require('supertest');
const app = require('../app');

it('GET /', async () => {
    const res = await request(app).get('/cart');
   
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(true);
    expect(res.body.booked).toEqual(
        [
            {
              "_id": "654b67db461be7ab8246e230",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-16T13:49:59.799Z",
              "price": 143,
              "__v": 0
            },
        ]
    )
});

it('POST /', async () => {
    const res = await request(app).post('/cart').send({
        departure: "Paris",
        arrival: "Bruxelles",
        date: "2023-11-08",
        price: 146,
    });
   
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(true);
});

it('DELETE /', async () => {
    const res = await request(app).delete('/cart').send({
        departure: "Paris",
        arrival: "Bruxelles",
        price: 146,
    });
   
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(true);
    expect(res.body.newBooked).toEqual(
        [
            {
              "_id": "654b67db461be7ab8246e230",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-16T13:49:59.799Z",
              "price": 143,
              "__v": 0
            }
        ]
    )
});