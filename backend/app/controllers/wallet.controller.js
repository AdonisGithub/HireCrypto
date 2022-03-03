
const db = require("../models");
const Wallet = db.wallet;

exports.walletaddresssave = (req, res) => {

  const newwallet = new Wallet({
      walletaddress: req.body.walletaddress
  });
  console.log(newwallet);
  newwallet.save((err, report) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    else{
      res.send("Wallet address Saved!");
    }
  });

};

