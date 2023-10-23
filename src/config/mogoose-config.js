const mongoose = require('mongoose');

function dbConnect(connectionString) {
    mongoose.set('strictQuery', false);
    return mongoose.connect(connectionString);
}

module.exports = dbConnect;