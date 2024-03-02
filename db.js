const mongoose = require('mongoose');
require("dotenv").config();

//Data Base Connection Code
async function connectToDatabase() {
    try {
        await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

module.exports = {connectToDatabase};

//Booking Handling Code

// const bookingS = new mongoose.Schema({
//     name: String,
//     date: Date,
//     email: String,
//     table: Number
// });
// const Booking = mongoose.model('Booking', bookingS);

