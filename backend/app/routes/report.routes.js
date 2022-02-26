const controller = require("../controllers/report.controller");

module.exports = function(app) {

   app.post("/report", controller.report);
 
};
