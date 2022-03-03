const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let wallet = new Schema({
    walletaddress:{
        type: String
    },
});

module.exports = mongoose.model('Wallet', wallet);
