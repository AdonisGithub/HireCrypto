const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

//db.report = require("./report.model");
db.wallet = require("./wallet.model");

module.exports = db;