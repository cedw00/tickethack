const request = require('supertest');
const app = require('../app');

it('POST /', async () => {
    const res = await request(app).post('/').send({
      departure: "Paris",
      arrival: "Bruxelles",
      date: "2023-11-08",
    });
   
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(true);
    expect(res.body.trips).toEqual(
        [
            {
              "_id": "654a08c42142f850267ae7a5",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-07T23:24:19.911Z",
              "price": 111
            },
            {
              "_id": "654a08c42142f850267ae7aa",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T00:29:47.314Z",
              "price": 107
            },
            {
              "_id": "654a08c42142f850267ae7af",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T01:41:33.768Z",
              "price": 26
            },
            {
              "_id": "654a08c42142f850267ae7bc",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T03:56:34.478Z",
              "price": 146
            },
            {
              "_id": "654a08c42142f850267ae7c4",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T05:20:39.742Z",
              "price": 38
            },
            {
              "_id": "654a08c42142f850267ae7db",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T09:20:46.443Z",
              "price": 63
            },
            {
              "_id": "654a08c42142f850267ae7e1",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T10:06:41.472Z",
              "price": 47
            },
            {
              "_id": "654a08c42142f850267ae7ec",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T12:04:38.541Z",
              "price": 104
            },
            {
              "_id": "654a08c42142f850267ae7ef",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T12:55:51.678Z",
              "price": 70
            },
            {
              "_id": "654a08c42142f850267ae800",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T15:24:32.014Z",
              "price": 34
            },
            {
              "_id": "654a08c42142f850267ae804",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T15:45:18.031Z",
              "price": 56
            },
            {
              "_id": "654a08c42142f850267ae80f",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T17:28:08.357Z",
              "price": 122
            },
            {
              "_id": "654a08c42142f850267ae814",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T17:52:37.351Z",
              "price": 29
            },
            {
              "_id": "654a08c42142f850267ae816",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T18:13:10.657Z",
              "price": 98
            },
            {
              "_id": "654a08c42142f850267ae826",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T21:29:48.301Z",
              "price": 149
            },
            {
              "_id": "654a08c42142f850267ae82c",
              "departure": "Paris",
              "arrival": "Bruxelles",
              "date": "2023-11-08T22:34:04.299Z",
              "price": 43
            }
          ]
    )
});