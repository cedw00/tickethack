var express = require('express');
var router = express.Router();

const BookedTrip = require('../models/bookedTrips');
const booked = [];

router.get('/', (req, res) => {
    BookedTrip.find().then(allBookedTrip => {
        if (allBookedTrip.length !== 0) {
            for (let i = 0; i < allBookedTrip.length; i++) {
                booked.push(allBookedTrip[i]);
            }
            BookedTrip.deleteMany({}).then();
        } else {
            res.json({ result: false, error: "No booked trips found" });
        }
        res.json({ result: true, booked: booked });
    })
})

module.exports = router;