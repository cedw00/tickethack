var express = require('express');
var router = express.Router();

const BookedTrip = require('../models/bookedTrips');

router.get('/', (req, res) => {
    BookedTrip.find().then(allBookedTrip => {
        if (allBookedTrip.length !== 0) {
            res.json({ result: true, booked: allBookedTrip });
        } else {
            res.json({ result: false, error: "No booked trips found" });
        }
    })
})

module.exports = router;