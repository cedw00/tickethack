const mongoose = require('mongoose');

const bookedTripSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
    isBooked: Boolean,
});

const BookedTrip = mongoose.model('bookedTrips', bookedTripSchema);

module.exports = BookedTrip;