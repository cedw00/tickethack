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
    }).then(
    CartTrip.deleteMany({})).then(
    BookedTrip.find().then(allBookedTrip => {
        if (allBookedTrip.length !== 0) {
            console.log(allBookedTrip)
            res.json({ result: true, booked: allBookedTrip });
        } else {
            res.json({ result: false, error: "No booked trips found" });
        }
    }))
})

module.exports = router;