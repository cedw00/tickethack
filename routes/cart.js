var express = require('express');
var router = express.Router();

const CartTrip = require('../models/cartTrips');
const { checkBody } = require('../modules/checkBody');

router.post('/', (req, res) => {
    CartTrip.deleteMany({}).then();
    if (!checkBody(req.body, ['departure', 'arrival', 'date'])) {
        res.json({ result: false, error: 'Missing or empty fields' });
        return
    }
    CartTrip.findOne({
        departure: { $regex: new RegExp(req.body.departure, 'i') },
        arrival: { $regex: new RegExp(req.body.arrival, 'i') },
        date: req.body.date,
        price: req.body.price,
    }).then(data => {
        const { departure, arrival, date, price } = req.body;
        const newCartTrip = new CartTrip({
            departure: departure,
            arrival: arrival,
            date: date,
            price: price,
        });
        newCartTrip.save();
        res.json({ result: true, newTrip: newCartTrip});
    })
});

router.get('/', (req, res) => {
    CartTrip.find().then(data => {
        if (data.length !== 0) {
            console.log(data)
            res.json({ result: true, booked: data });
        } else {
            res.json({ result: false, error: "No booked trip found"});
        }
    })
})

router.delete('/', (req, res) => {
    CartTrip.findOne({
        departure: req.body.departure,
        arrival: req.body.arrival,
        price: req.body.price,
    }).then(data => {
        if (data) {
            CartTrip.deleteOne({ _id: data._id }).then(booked => {
                CartTrip.find().then(newBooked => {
                    res.json({ result: true, newBooked: newBooked });
                })
            })
        } else {
            res.json({ result: false, error: "Cannot delete booked trip" });
        }
    })
})

module.exports = router;