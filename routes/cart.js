var express = require('express');
var router = express.Router();
var moment = require('../node_modules/moment');

const BookedTrip = require('../models/bookedTrips');

router.post('/', (req, res) => {
    BookedTrip.findOne({
        departure: { $regex: new RegExp(req.body.departure, 'i') },
        arrival: { $regex: new RegExp(req.body.arrival, 'i') },
        date: req.body.date,
        price: req.body.price,
    }).then(data => {
        const { departure, arrival, date, price } = req.body;
        const bookedTrip = new BookedTrip({
            departure: departure,
            arrival: arrival,
            date: date,
            price: price,
        });
        bookedTrip.save();
        res.json({ result: true, newTrip: bookedTrip});
    })
});

router.get('/', (req, res) => {
    BookedTrip.find().then(data => {
        if (data.length !== 0) {
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