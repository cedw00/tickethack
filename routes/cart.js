var express = require('express');
var router = express.Router();

const BookedTrip = require('../models/bookedTrips');
const { checkBody } = require('../modules/checkBody');

router.post('/', (req, res) => {
    BookedTrip.deleteMany({}).then();
    if (!checkBody(req.body, ['departure', 'arrival', 'date'])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return
    }
    BookedTrip.findOne({
        departure: { $regex: new RegExp(req.body.departure, 'i') },
        arrival: { $regex: new RegExp(req.body.arrival, 'i') },
        date: req.body.date,
        price: req.body.price,
    }).then(data => {
        if (data === null) {
            const { departure, arrival, date, price } = req.body;
            const newBookedTrip = new BookedTrip({
            departure: departure,
            arrival: arrival,
            date: date,
            price: price,
            isBooked: false,
            });
            newBookedTrip.save();
            res.json({ result: true, newTrip: newBookedTrip});
        } else {
            res.json({ result: false, error: 'Already in cart' });
            return
        }
    })
});

router.get('/', (req, res) => {
    BookedTrip.find().then(data => {
        if (data.length !== 0) {
            console.log(data)
            res.json({ result: true, booked: data });
        } else {
            res.json({ result: false, error: "No booked trip found"});
        }
    })
})

router.delete('/', (req, res) => {
    BookedTrip.findOne({
        departure: req.body.departure,
        arrival: req.body.arrival,
        price: req.body.price,
    }).then(data => {
        if (data) {
            BookedTrip.deleteOne({ _id: data._id }).then(booked => {
                BookedTrip.find().then(newBooked => {
                    res.json({ result: true, newBooked: newBooked });
                })
            })
        } else {
            res.json({ result: false, error: "Cannot delete booked trip" });
        }
    })
})

module.exports = router;