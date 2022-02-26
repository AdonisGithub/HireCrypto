const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let report = new Schema({

    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
      type: String
    },
    message: {
      type: String
    },
    walletaddress:{
        type: String
    },
});

module.exports = mongoose.model('Report', report);
