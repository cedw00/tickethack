const request = require('supertest');
const app = require('../app');

it('GET /', async () => {
    const res = await request(app).get('/booking');
   
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