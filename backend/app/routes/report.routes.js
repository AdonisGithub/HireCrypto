const controller = require("../controllers/report.controller");

module.exports = function(app) {

   app.post("/api/report", controller.report);
 
};
