var express = require('express');
var router = express.Router();
var moment = require('../node_modules/moment');

const BookedTrip = require('../models/bookedTrips');

router.get('/', (req, res) => {
    BookedTrip.find().then(data => {
        if (data.length !== 0) {
            res.json({ result: true, booked: data });
        } else {
            res.json({ result: false, error: "No booked trip found"});
        }
    })
});

module.exports = router;