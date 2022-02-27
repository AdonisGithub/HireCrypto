
const db = require("../models");
const Report = db.report;

exports.report = (req, res) => {
      const newreport = new Report({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phoneNumber:req.body.phoneNumber,
          message: req.body.message,
          walletaddress: req.body.walletaddress
      });
        console.log(newreport);
      newreport.save((err, report) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        else{
          res.send("Thank you! Your submission has been received!");
        }
      });

};

