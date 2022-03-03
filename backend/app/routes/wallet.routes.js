const controller = require("../controllers/wallet.controller");

module.exports = function(app) {

   app.post("/api/walletaddress", controller.walletaddresssave);
 
};
