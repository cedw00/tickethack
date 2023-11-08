var express = require('express');
var router = express.Router();
var moment = require('../node_modules/moment');

const BookedTrip = require('../models/bookedTrips');
const CartTrip = require('../models/cartTrips');

router.get('/', (req, res) => {
    CartTrip.find().then(data => {
        for (let i = 0; i < data.length; i++) {
            const newBookedTrip = new BookedTrip({
                departure: data[i].departure,
                arrival: data[i].arrival,
                data: data[i].date,
                price: data[i].price,
            });
            newBookedTrip.save();
        }
    })
    CartTrip.deleteMany({}).then(
        CartTrip.find().then(cart => {
            if (cart.length === 0) {
                console.log(cart)
            }
        })
    );
    BookedTrip.find().then(allBookedTrip => {
        if (allBookedTrip.length !== 0) {
            res.json({ result: true, allBookedTrip });
        } else {
            res.json({ result: false, error: "No booked trips found" });
        }
    })
});

module.exports = router;