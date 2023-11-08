var express = require('express');
var router = express.Router();
var moment = require('../node_modules/moment');

const Trip = require('../models/trips');
const { checkBody } = require('../modules/checkBody');

router.post('/', (req, res) => {
  if (!checkBody(req.body, ['departure', 'arrival', 'date'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return
  }
  const { departure, arrival, date } = req.body;
  Trip.find({ departure: departure, arrival: arrival }).then(data => {
    if (data.length === 0) {
      res.json({ result: false, error: "No trips found with these parameters" });
      return;
    }
    const allTrips = data.filter(e => moment(e.date).format('L') === moment(date).format('L'));
    res.json({ result: true, trips: allTrips });
  })
});

module.exports = router;
